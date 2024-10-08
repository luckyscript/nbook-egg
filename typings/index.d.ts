export interface Article {
  aid: number;
  title: string;
  created: string;
  modified: string;
  text: string;
  html?: string;
  brief?: string;
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
  contentLength?: number;
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

// egg-patch 

interface EggFile {
  field: string;
  filename: string;
  encoding: string;
  mime: string;
  filepath: string;
}

declare module 'egg' {
  interface Request {
    files: EggFile[];
  }
}
