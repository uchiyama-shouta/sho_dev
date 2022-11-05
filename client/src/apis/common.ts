export interface CommonItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface CommonList<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
