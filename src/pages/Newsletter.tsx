import { useDispatch, useSelector } from "react-redux";
import type { State } from "../type/type";
import { useEffect } from "react";
import { getBlogsByCount } from "../redux/slice";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionCountainer from "../components/SectionCountainer";
import Card from "../components/Card";

function Newsletter() {
  const dispatch = useDispatch();
  const someBlogs = useSelector((state: State) => state.blogs.someBlogs);
  const firstTwo = someBlogs.slice(0, 2);
  const thirdBlog = someBlogs[2];

  useEffect(() => {
    dispatch(getBlogsByCount(3));
  }, [dispatch]);

  return (
    <div className="mt-16 2xl:mt-24 3xl:mt-28 space-y-13 2xl:space-y-[72px] 3xl:space-y-8">
      <div data-aos="fade-up">
        <NewsLetterSection />
      </div>

      <SectionCountainer title="Recent blog posts">
        <div className="3xl:grid-cols-3 2xl:grid-cols-2 grid grid-cols-1 gap-8">
          {firstTwo.map((blog, index) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-offset="100"
            >
              <Card
                id={blog.id}
                author={blog.author}
                date={blog.date}
                title={blog.title}
                cover={blog.coverImage}
                summary={blog.summary}
                categories={blog.categories}
                col={1}
              />
            </div>
          ))}

          {thirdBlog && (
            <div
              className="2xl:col-span-2 3xl:col-span-1 col-span-1"
              data-aos="zoom-in"
              data-aos-delay={300}
              data-aos-offset="120"
            >
              <Card
                key={thirdBlog.id}
                id={thirdBlog.id}
                author={thirdBlog.author}
                date={thirdBlog.date}
                title={thirdBlog.title}
                cover={thirdBlog.coverImage}
                summary={thirdBlog.summary}
                categories={thirdBlog.categories}
                className="2xl:aspect-[3.4] 3xl:aspect-[1.6]"
                col={1}
              />
            </div>
          )}
        </div>
      </SectionCountainer>
    </div>
  );
}

export default Newsletter;
