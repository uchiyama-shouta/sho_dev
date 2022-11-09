use async_graphql::{Object, SimpleObject};

#[derive(Default)]
pub struct PostQuery;

#[Object]
impl PostQuery {
    #[graphql(name = "get_post")]
    async fn get_post(&self) -> Vec<Post> {
        let posts = vec![
            Post {
                id: 1,
                title: "Hello World".to_string(),
            },
            Post {
                id: 2,
                title: "Hello World2".to_string(),
            },
        ];
        posts
    }
}

#[derive(SimpleObject)]
pub struct Post {
    id: i32,
    title: String,
}
