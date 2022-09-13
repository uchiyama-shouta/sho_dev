import dayjs from "dayjs";

import type { PostItem } from "apis/blogs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { templete } from "lib/date";
import { client } from "lib/microcms-client";

type Props = PostItem;

const PostPage: NextPage<Props> = (props) => {
  console.log(props);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold leading-8 tracking-wide text-gray-200 sm:text-4xl">
        {props.title}
      </h1>
      <div className="mt-1 flex justify-center font-medium text-gray-500 dark:text-gray-300 md:mt-3">
        公開日: {dayjs(props.updatedAt).format(templete)}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.["id"] as string;
  const data = await client.blogs._id(id).$get();

  return {
    props: { ...data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.blogs.$get({ query: { fields: "id" } });
  const paths = data.contents.map((post) => {
    return `/posts/${post.id}`;
  });
  return {
    paths,
    fallback: false,
  };
};
