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

export interface User {
  uid: string;
  name: string;
  password: string;
  mail: string;
  url: string;
  salt: string;
  screenName: string;
  created: string;
  activated: string;
  logged: string;
  group: string;
  authCode: string;
}

export interface PageInfo {
  currentPage: number;
  totalPage: number;
}

export interface MailData {
  from: string;
  to: string;
  subject: string;
  html?: string;
}