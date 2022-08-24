export type Post = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category?: Category[];
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};
