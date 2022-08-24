import type { CommonItem, CommonList } from "../common";
import type { MicroCMSQueries } from "microcms-js-sdk";

type CategoryItem = CommonItem & {
  name: string;
};

export type EyeCatch = {
  url: string;
  height: number;
  width: number;
};

export type PostItem = CommonItem & {
  title: string;
  description: string;
  category: CategoryItem[];
  content: string;
  eyecatch: EyeCatch;
};

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: CommonList<PostItem>;
  };
};
