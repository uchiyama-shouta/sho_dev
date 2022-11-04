import { load } from "cheerio";
import dayjs from "dayjs";
import hljs from "highlight.js";

import type { PostItem } from "apis/blogs";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import BackButton from "components/Button/BackButton";
import { template } from "lib/date";
import { client } from "lib/microcms-client";

import "highlight.js/styles/hybrid.css";

type Props = PostItem;

const PostPage: NextPage<Props> = (props) => {
  console.log(props);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold leading-8 tracking-wide text-gray-200 sm:text-4xl">
        {props.title}
      </h1>
      <div className="mt-1 flex justify-center font-medium text-gray-500 dark:text-gray-300 md:mt-3">
        公開日: {dayjs(props.updatedAt).format(template)}
      </div>
      <div
        className="prose-lg prose-invert sm:prose-invert"
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
      <BackButton href="/" />
    </div>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.["id"] as string;
  const data = await client.blogs._id(id).$get();

  const $ = load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: { ...data, content: $.html() },
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
