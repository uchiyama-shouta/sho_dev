import type { Post } from "types/post";

import PostItem from "components/Post/PostItem";

const data: Post = {
  id: "g-219veyt0-1",
  createdAt: "2022-08-24T01:58:15.482Z",
  updatedAt: "2022-08-24T06:32:59.289Z",
  publishedAt: "2022-08-24T01:58:15.482Z",
  revisedAt: "2022-08-24T06:32:59.289Z",
  title: "Hello World",
  eyecatch: {
    url: "https://images.microcms-assets.io/assets/988afb3dc5754f4d98682c322791d8fd/5134933158764433821bde310d8c4c03/blog-template.png",
    height: 630,
    width: 1200,
  },
  content: "Hello World!!",
};

const PostList = () => {
  return (
    <ul className="space-y-12">
      <li>
        <PostItem {...data} />
      </li>
    </ul>
  );
};

export default PostList;
