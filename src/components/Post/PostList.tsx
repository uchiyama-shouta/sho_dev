import type { FC } from "react";

import type { Props as PostItemProps } from "components/Post/PostItem";

import PostItem from "components/Post/PostItem";

type Props = {
  posts: PostItemProps[];
};

const PostList: FC<Props> = ({ posts }) => {
  return (
    <ul className="space-y-12">
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem {...post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
