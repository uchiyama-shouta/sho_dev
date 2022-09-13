import type { InferGetStaticPropsType, NextPage } from "next";

import BackButton from "components/Button/BackButton";
import NextButton from "components/Button/NextButton";
import { query } from "components/Post/PostItem";
import PostList from "components/Post/PostList";
import { client } from "lib/microcms-client";

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <div className="h-7" />
      <PostList posts={props.posts} />
      <div className="mt-20 flex items-center justify-between text-white">
        <NextButton />
        <BackButton />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.blogs.$get({ query: { fields: query } });

  return {
    props: { posts: data.contents },
  };
};
