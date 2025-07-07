import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "./Card";
import { getRecentBlogs } from "../redux/slice";
import type { State } from "../type/type";
import SectionCountainer from "./SectionCountainer";

const CurrentBlogsSection = () => {
  const dispatch = useDispatch();
  const currentBlogs = useSelector((state: State) => state.blogs.recentBlogs);

  useEffect(() => {
    dispatch(getRecentBlogs(4));
  }, [dispatch]);

  const recentBlogCards = currentBlogs.map((blog) => ({
    id: blog.id,
    title: blog.title,
    summary: blog.summary,
    cover: blog.coverImage,
    categories: blog.categories.map((cat) => cat),
    author: blog.author || "Unknown",
    date: blog.date,
  }));

  return (
    <SectionCountainer title="Recent blog Blogs">
      {recentBlogCards.length == 4 && (
        <div className="3xl:grid-cols-2 grid grid-cols-1 gap-8">
          <div className="3xl:col-span-1 col-span-full">
            <Card
              id={recentBlogCards[0].id}
              key={recentBlogCards[0].id}
              author={recentBlogCards[0].author}
              summary={recentBlogCards[0].summary}
              cover={recentBlogCards[0].cover}
              date={recentBlogCards[0].date}
              title={recentBlogCards[0].title}
              categories={recentBlogCards[0].categories}
              col={1}
              className="2xl:aspect-[3.4] 3xl:aspect-[2.6]"
            />
          </div>

          <div className="3xl:col-span-1 col-span-full grid gap-8">
            {recentBlogCards.slice(1, 3).map((blog) => (
              <Card
                id={blog.id}
                key={blog.id}
                author={blog.author}
                summary={blog.summary}
                cover={blog.cover}
                date={blog.date}
                title={blog.title}
                categories={blog.categories}
                col={2}
              />
            ))}
          </div>

          <div className="3xl:col-span-2 3xl:flex hidden">
            <Card
              id={recentBlogCards[3].id}
              key={recentBlogCards[3].id}
              author={recentBlogCards[3].author}
              summary={recentBlogCards[3].summary}
              cover={recentBlogCards[3].cover}
              date={recentBlogCards[3].date}
              title={recentBlogCards[3].title}
              categories={recentBlogCards[3].categories}
              col={2}
              className="3xl:aspect-[2.4]"
            />
          </div>

          <div className="3xl:hidden col-span-full">
            <Card
              id={recentBlogCards[3].id}
              key={recentBlogCards[3].id}
              author={recentBlogCards[3].author}
              summary={recentBlogCards[3].summary}
              cover={recentBlogCards[3].cover}
              date={recentBlogCards[3].date}
              title={recentBlogCards[3].title}
              categories={recentBlogCards[3].categories}
              col={1}
              className="2xl:aspect-[3.4]"
            />
          </div>
        </div>
      )}
    </SectionCountainer>
  );
};

export default CurrentBlogsSection;
