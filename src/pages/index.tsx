import type { NextPage } from "next";

import BackButton from "components/Button/BackButton";
import NextButton from "components/Button/NextButton";
import Layout from "components/Layout";
import PostList from "components/Post/PostList";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-7" />
      <PostList />
      <div className="mt-20 flex items-center justify-between text-white">
        <NextButton />
        <BackButton />
      </div>
    </Layout>
  );
};

export default Home;
