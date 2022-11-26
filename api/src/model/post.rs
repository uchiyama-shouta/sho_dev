use async_graphql::SimpleObject;
use serde::{Deserialize, Serialize};

#[derive(SimpleObject, Clone, Debug, Serialize, Deserialize)]
pub struct Post {
    #[serde(rename = "_id")]
    pub id: String,
    pub title: String,
    pub description: String,
    pub content: String,
    pub thumbnail: String,
    pub published_at: String,
}
