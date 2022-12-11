use crate::model::post::Post;
use async_graphql::Context;
use mongodb::{Client, Collection};

pub fn return_post_collection(ctx: &Context<'_>) -> Collection<Post> {
  let client = ctx.data::<Client>().unwrap();
  let db = client.database("sho_db");
  db.collection::<Post>("posts")
}

pub const ALPHABET: [char; 61] = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5',
  '6', '7', '8', '9',
];

pub const IMAGE_URL: &'static str = "https://images.microcms-assets.io/assets/988afb3dc5754f4d98682c322791d8fd/5cee247b188248d888a6e716b0b2771d/blog-template-description1.png";
