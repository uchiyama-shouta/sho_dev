use crate::model::post::Post;
use async_graphql::Context;
use mongodb::{Client, Collection};

pub fn return_post_collection(ctx: &Context<'_>) -> Collection<Post> {
    let client = ctx.data::<Client>().unwrap();
    let db = client.database("sho_db");
    db.collection::<Post>("posts")
}
