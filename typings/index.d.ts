export interface Article {
  aid: number;
  title: string;
  created: string;
  modified: string;
  text: string;
  order: number;
  authorId: number;
  status: string;
  commentNum: number;
  allowComment: number;
  categoryId: number;
  slug?: string;
  readnum: number;
  type: string;
  link?: string;
}

export interface PageInfo {
  currentPage: number;
  totalPage: number;
}