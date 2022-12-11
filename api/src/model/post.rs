use async_graphql::SimpleObject;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(SimpleObject, Clone, Debug, Serialize, Deserialize)]
pub struct Post {
  #[serde(rename = "_id")]
  pub id: String,
  pub title: String,
  pub description: String,
  pub content: String,
  pub thumbnail: String,
  pub created_at: DateTime<Utc>,
  pub updated_at: DateTime<Utc>,
  pub is_publish: bool,
}
