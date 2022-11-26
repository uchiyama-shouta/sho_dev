use anyhow::Ok;
use async_graphql::{futures_util::TryStreamExt, Context, InputObject, Object};
use mongodb::{
    bson::{doc, Uuid},
    Client,
};

use crate::model::post::Post;

#[derive(Default)]
pub struct PostQuery;

#[derive(Default)]
pub struct PostMutation;
const IMAGE_URL: &'static str = "https://images.microcms-assets.io/assets/988afb3dc5754f4d98682c322791d8fd/5cee247b188248d888a6e716b0b2771d/blog-template-description1.png";

#[Object]
impl PostQuery {
    #[graphql(name = "get_posts")]
    async fn get_posts(&self, ctx: &Context<'_>) -> Result<Vec<Post>, anyhow::Error> {
        let client = ctx.data::<Client>().unwrap();
        let db = client.database("sho_db");
        let collection = db.collection::<Post>("posts");
        let posts = collection
            .find(None, None)
            .await?
            .try_collect::<Vec<Post>>()
            .await?;
        Ok(posts)
    }
    #[graphql(name = "get_post")]
    async fn get_post(&self, ctx: &Context<'_>, id: String) -> Result<Option<Post>, anyhow::Error> {
        let client = ctx.data::<Client>().unwrap();
        let db = client.database("sho_db");
        let collection = db.collection::<Post>("posts");
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
        let db = ctx.data::<Client>().unwrap();
        let collection = db.database("sho_db").collection::<Post>("posts");
        let id = Uuid::new();
        let new_post = Post {
            id: id.to_string(),
            title: input.title,
            content: input.content,
            description: input.description,
            thumbnail: IMAGE_URL.to_string(),
            published_at: input.published_at,
        };

        collection.insert_one(new_post.clone(), None).await?;
        Ok(new_post)
    }
}

#[derive(InputObject)]
pub struct CreatePostInput {
    pub title: String,
    pub description: String,
    pub content: String,
    pub thumbnail: String,
    pub published_at: String,
}
