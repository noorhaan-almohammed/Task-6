import { useDispatch, useSelector } from "react-redux";
import type { State } from "../type/type";
import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { getBlogById } from "../redux/slice";
import { categoriesColor } from "../dataContent/OtherData";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const blog = useSelector((state: State) => state.blogs.blogDetail);

  useEffect(() => {
    if (id) dispatch(getBlogById(parseInt(id)));
  }, [id]);

  return (
    <article className="mx-auto text-grey-text dark:text-dark-blog-text text-[16px] font-normal space-y-3">
      <header className="mb-8 space-y-8">
        <div className="text-sm text-date-text font-semibold leading-5">
          <span>{blog.author}</span> • <span>{blog.date}</span>
        </div>
        <h1 className="text-4xl font-bold leading-8 text-dark-text dark:text-white">
          {blog.title}
        </h1>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full aspect-[1.6] 2xl:aspect-[2.06] 3xl:aspect-[1.83] object-cover object-top"
        />
      </header>

      <section className="space-y-3 leading-6 mb-3">
        <p>{blog.summary}</p>
        <p>{blog.intro}</p>
        <h2 className="font-bold text-center 3xl:px-24">{blog.subtitle}</h2>
      </section>

      <section className="space-y-3 mb-6">
        {blog.sections.map((section, index) => (
          <div key={index} className="space-y-3 ">
            {section.image && (
              <img src={section.image} alt={blog.title} className="w-full" />
            )}

            {section.description && (
              <p className="text-center text-[16px] font-normal">
                {section.description}
              </p>
            )}
            {section.subtitle && (
              <h4 className="text-[18px] font-bold">{section.subtitle}</h4>
            )}
            {section.paragraph?.map((para, i) => (
              <div key={i} className="space-y-3 mb-3">
                {para.title && 
                  <h4 className="text-[16px] font-bold">{para?.title}</h4>
                }
                
                {para.type === "list" && para.list_items ? (
                  <ul className="list-disc list-inside">
                    {para.list_items.map((item) => (
                      <li key={item.id} className="leading-6">
                        {item.text.map((part, index) => {
                          if (part.type === "text") {
                            return <span key={index}>{part.value}</span>;
                          } else if (part.type === "link") {
                            return (
                              <Link key={index} to={part.href} target="_blank" rel="noopener noreferrer"
                                className="underline"
                              >
                                {part.value}
                              </Link>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </li>
                    ))}
                  </ul>
                ) : para.content ? (
                  <p className="leading-6">
                    {para.def_Word && (
                      <strong className="mr-1">{para.def_Word}</strong>
                    )}
                    {para.content.map((part, index) => {
                      if (part.type === "text") {
                        return <span key={index}>{part.value}</span>;
                      } else if (part.type === "link") {
                        return (
                          <Link key={index} to={part.href} target="_blank" rel="noopener noreferrer"
                            className="underline"
                          >
                            {part.value}
                          </Link>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </p>
                ) : null}
                 {para.image &&
                  <img src={para?.image} alt={para?.title} className="w-full" />
                }

                {para.description &&
                  <p className="text-center"> {para?.description} </p>
                }
              </div>
            ))}
          </div>
        ))}
      </section>

      <footer className="mb-16 2xl:mb-0">
        <div className=" flex gap-2 flex-wrap">
          {blog.categories.map((item, index) => {
            const style = categoriesColor.find((cat) => cat.name === item);
            return (
              <span
                key={index}
                className={`rounded-2xl px-2.5 py-0.5 text-sm font-medium
                    ${style?.background || "bg-gray-100"} 
                    ${style?.text || "text-gray-800"}`}
              >
                {item}
              </span>
            );
          })}
        </div>
      </footer>
    </article>
  );
};

export default BlogDetail;
