import type store from "../redux/store";
type Content =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

interface ParagraphItem {
  title?: string;
  def_Word?: string;
  content?: Content[];
  image?: string;
  description?: string;
  link?: string;
  type?: "list";
  list_items?: { id: number; text: Content[] }[];
}

interface Section {
  subtitle?: string;
  image?: string;
  description?: string;
  paragraph?: ParagraphItem[];
}

export interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  coverImage: string;
  summary: string;
  intro: string;
  subtitle: string;
  sections: Section[];
  categories: string[];
}
export interface summaryBlog {
  id: number;
  title: string;
  author: string;
  date: string;
  coverImage: string;
  summary: string;
  categories: string[];
}
export interface CardType {
  id: number;
  col: 1 | 2;
  className?: string;
  author: string;
  date: string;
  title: string;
  summary: string;
  cover: string;
  categories: string[];
}
export interface BlogState {
  blogs: Blog[];
  currentBlogs: summaryBlog[];
  recentBlogs: summaryBlog[];
  currentPage: number;
  totalPages: number;
  perPage: number;
  blogDetail: Blog;
  someBlogs: Blog[],
}
export enum Theme {
  Dark = "dark",
  Light = "light",
}
export interface NavBarType {
  label: string;
  path: string;
}
export interface FooterType {
  link: string;
  content: string;
}
export interface projectType {title: string, description: string, image: string,link: string}
export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
