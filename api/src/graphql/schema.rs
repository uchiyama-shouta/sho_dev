use super::resolver::post::PostQuery;
use async_graphql::{EmptyMutation, EmptySubscription, MergedObject, Schema};

#[derive(MergedObject, Default)]
pub struct Query(PostQuery);

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;

pub async fn build_schema() -> AppSchema {
    Schema::new(Query::default(), EmptyMutation, EmptySubscription)
}
