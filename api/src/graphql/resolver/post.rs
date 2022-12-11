use anyhow::Ok;
use async_graphql::{futures_util::TryStreamExt, Context, InputObject, Object};
use chrono::Utc;
use mongodb::bson::doc;
use nanoid;

use crate::{
  graphql::util::{return_post_collection, ALPHABET, IMAGE_URL},
  model::post::Post,
};

#[derive(Default)]
pub struct PostQuery;

#[derive(Default)]
pub struct PostMutation;

#[Object]
impl PostQuery {
  #[graphql(name = "get_posts")]
  async fn get_posts(&self, ctx: &Context<'_>) -> Result<Vec<Post>, anyhow::Error> {
    let collection = return_post_collection(ctx);
    let posts = collection
      .find(None, None)
      .await?
      .try_collect::<Vec<Post>>()
      .await?;
    Ok(posts)
  }
  #[graphql(name = "get_post")]
  async fn get_post(&self, ctx: &Context<'_>, id: String) -> Result<Option<Post>, anyhow::Error> {
    let collection = return_post_collection(ctx);
    let filter = doc! { "_id": id };
    let post = collection.find_one(filter, None).await?;
    match post {
      Some(v) => Ok(Some(v)),
      None => todo!(),
    }
  }
}

#[Object]
impl PostMutation {
  #[graphql(name = "create_post")]
  async fn create_post(
    &self,
    ctx: &Context<'_>,
    input: CreatePostInput,
  ) -> Result<Post, anyhow::Error> {
    let collection = return_post_collection(ctx);

    let id = nanoid::nanoid!(14, &ALPHABET);

    let new_post = Post {
      id,
      title: input.title,
      content: input.content,
      description: input.description,
      thumbnail: IMAGE_URL.to_string(),
      created_at: Utc::now(),
      updated_at: Utc::now(),
      is_publish: input.is_publish,
    };

    collection.insert_one(new_post.clone(), None).await?;
    Ok(new_post)
  }

  #[graphql(name = "update_post")]
  async fn update_post(
    &self,
    ctx: &Context<'_>,
    id: String,
    input: UpdatePostInput,
  ) -> Result<Option<Post>, anyhow::Error> {
    let collection = return_post_collection(ctx);

    let filter = doc! { "_id": &id };
    let prev_post = collection
      .find_one(filter.clone(), None)
      .await?
      .expect("投稿が存在しません");

    collection
      .update_one(
        filter.clone(),
        doc! {
            "$set": {
                "title": input.title.unwrap_or(prev_post.title),
                "content": input.content.unwrap_or(prev_post.content),
                "description": input.description.unwrap_or(prev_post.description),
                "updated_at": Utc::now().to_string(),
                "is_publish": input.is_publish.unwrap_or(prev_post.is_publish),
            }
        },
        None,
      )
      .await?;

    let post = collection.find_one(filter, None).await?;
    match post {
      Some(v) => Ok(Some(v)),
      None => todo!(),
    }
  }

  #[graphql(name = "delete_post")]
  async fn delete_post(&self, ctx: &Context<'_>, id: String) -> Result<String, anyhow::Error> {
    let collection = return_post_collection(ctx);

    let filter = doc! { "_id": &id };

    collection.delete_one(filter, None).await?;

    Ok(id)
  }
}

#[derive(InputObject)]
pub struct CreatePostInput {
  pub title: String,
  pub description: String,
  pub content: String,
  pub is_publish: bool,
}

#[derive(InputObject)]
pub struct UpdatePostInput {
  pub title: Option<String>,
  pub description: Option<String>,
  pub content: Option<String>,
  pub is_publish: Option<bool>,
}
