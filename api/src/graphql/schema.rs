use super::resolver::post::{PostMutation, PostQuery};
use async_graphql::{EmptySubscription, MergedObject, Schema};

use mongodb::{options::ClientOptions, Client};

// Parse a connection string into an options struct.

#[derive(MergedObject, Default)]
pub struct Query(PostQuery);

#[derive(MergedObject, Default)]
pub struct Mutation(PostMutation);

pub type AppSchema = Schema<Query, Mutation, EmptySubscription>;

pub async fn build_schema() -> AppSchema {
  let client_options = ClientOptions::parse("mongodb://root:example@localhost:27017")
    .await
    .expect("db Connection failed.");

  // Get a handle to the deployment.
  let client = Client::with_options(client_options).expect("db Connection failed.");
  Schema::build(Query::default(), Mutation::default(), EmptySubscription)
    .data(client)
    .finish()
}
