use std::net::SocketAddr;

use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
    extract::Extension,
    http::HeaderValue,
    response::{Html, IntoResponse},
    routing::get,
    Router,
};
use graphql::schema::AppSchema;
use tower_http::cors::CorsLayer;

pub mod graphql;
pub mod model;

#[cfg(debug_assertions)]
use dotenv::dotenv;

use crate::graphql::schema::build_schema;

const ENDPOINT: &str = "/api/graphql";

async fn graphql_handler(schema: Extension<AppSchema>, req: GraphQLRequest) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
}

async fn graphql_playground() -> impl IntoResponse {
    Html(playground_source(GraphQLPlaygroundConfig::new(ENDPOINT)))
}

#[tokio::main]
async fn main() {
    #[cfg(debug_assertions)]
    dotenv().ok();

    let schema = build_schema().await;

    let app = Router::new()
        .route(ENDPOINT, get(graphql_playground).post(graphql_handler))
        .layer(Extension(schema))
        .layer(
            CorsLayer::new().allow_origin("http://localhost:3000".parse::<HeaderValue>().unwrap()),
        );

    println!("Playground: http://localhost:8000{}", ENDPOINT);

    serve(app).await;
}

async fn serve(app: Router) {
    let addr = SocketAddr::from(([0, 0, 0, 0], 8000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
