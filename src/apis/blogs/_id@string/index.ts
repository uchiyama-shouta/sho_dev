import type { PostItem } from "apis/blogs";
import type { MicroCMSQueries } from "microcms-js-sdk";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: PostItem;
  };
};
