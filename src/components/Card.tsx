import { useSelector } from "react-redux";
import type { CardType, State } from "../type/type";
import { Link } from "react-router";
import { categoriesColor } from "../dataContent/OtherData";

const Card = ({
  id,
  author,
  date,
  title,
  summary,
  cover,
  categories,
  className,
  col,
}: CardType) => {
  const theme = useSelector((state: State) => state.theme);

  return (
    <div className="group relative bg-white dark:bg-dark-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-[#22203f49]">
      <div
        className={`relative z-20 grid grid-cols-1 gap-8  transition-all duration-300 p-0 group-hover:p-3 ${
          col == 2 ? "2xl:grid-cols-2" : "2xl:grid-cols-1"
        }`}
      >
        <div className={`relative aspect-[1.6] ${className ?? ""} w-full`}>
          <img
            alt="cover"
            src={cover}
            className="absolute size-full object-cover "
          />
        </div>

        <div className="flex h-full flex-col gap-y-3">
          <p className="text-sm font-semibold text-date-text">
            {`${author} • ${date}`}
          </p>

          <Link
            to={`/blog/detail/${id}`}
            className="flex w-full transition-colors duration-300 group-hover:text-primary"
          >
            <p className="text-2xl font-semibold dark:text-white transition-colors duration-300 group-hover:text-primary">
              {title}
            </p>
            <img
              alt="arrow"
              src={
                theme === "dark"
                  ? "/icons/light-up-arrow.svg"
                  : "/icons/dark-up-arraw.svg"
              }
              className=" ml-auto transition-transform duration-300 group-hover:-translate-y-1"
            />
          </Link>

          <div className="pb-6">
            <p className="line-clamp-3 font-normal text-grey-text dark:text-dark-blog-text">
              {summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item, index) => {
              const style = categoriesColor.find((cat) => cat.name === item);
              return (
                <div
                  key={index}
                  className={`rounded-2xl px-2.5 py-0.5 text-sm font-medium 
                    ${style?.background || "bg-gray-200"} 
                    ${style?.text || "text-gray-900"}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
