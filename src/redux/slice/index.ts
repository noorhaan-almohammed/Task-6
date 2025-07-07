import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { blogs } from "../../dataContent/Data";
import type { BlogState } from "../../type/type";

const perPage = 6;

const initialState: BlogState = {
  blogs: blogs,
  currentBlogs: [],
  recentBlogs: [],
  someBlogs: [],
  currentPage: 1,
  totalPages: Math.ceil(blogs.length / perPage),
  perPage: perPage,
  blogDetail: blogs[1],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getBlogsByPage: (state, action: PayloadAction<number>) => {
      const page = action.payload;
      const start = (page - 1) * state.perPage;
      const end = start + state.perPage;

      state.currentPage = page;
      state.totalPages = Math.ceil(state.blogs.length / state.perPage);
      state.currentBlogs = state.blogs.slice(start, end);
    },
    getBlogsByCount: (state, action: PayloadAction<number>) => {
      state.someBlogs = state.blogs.slice(0, action.payload);
    },

    getRecentBlogs: (state, action: PayloadAction<number>) => {
      const recent = [...state.blogs]
        .slice(-action.payload)
        .map(
          ({ id, title, date, author, coverImage, summary, categories }) => ({
            id,
            title,
            author,
            date,
            coverImage,
            summary,
            categories,
          })
        );
      state.recentBlogs = recent;
    },
    getBlogById: (state, action: PayloadAction<number>) => {
      const blog = state.blogs.find((b) => b.id === action.payload);
      if (blog) {
        state.blogDetail = blog;
      }
    },
  },
});

export const { getBlogsByPage, getRecentBlogs, getBlogById, getBlogsByCount } =
  blogSlice.actions;
export default blogSlice.reducer;
