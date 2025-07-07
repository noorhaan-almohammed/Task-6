import { useEffect } from "react";
import { getRecentBlogs } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import type { State } from "../type/type";
import Card from "../components/Card";
import { Outlet } from "react-router";
import NewsLetterSection from "../components/NewsLetterSection";

function Blog() {
  const dispatch = useDispatch();
  const currentBlogs = useSelector((state: State) => state.blogs.recentBlogs);

  useEffect(() => {
    dispatch(getRecentBlogs(6));
  }, []);
  return (
    <div className="mt-16 2xl:mt-24 3xl:mt-28 flex flex-col 2xl:grid 2xl:grid-cols-[342px_1fr] gap-4 3xl:gap-8">
      <section className="space-y-8 flex flex-col 2xl:order-1 order-2 col-span-1">
        <h2 className=" text-2xl font-semibold text-[#1A1A1A] dark:text-white">
          Recent blog posts
        </h2>
        {currentBlogs.map((blog) => (
          <Card key={blog.id} cover={blog.coverImage} {...blog} col={1} />
        ))}
      </section>
      <section className="2xl:order-2 order-1">
        <Outlet />
      </section>
      <div className="col-span-2 3xl:col-start-2 3xl:col-span-1 order-3">
        <NewsLetterSection />
      </div>
    </div>
  );
}

export default Blog;
