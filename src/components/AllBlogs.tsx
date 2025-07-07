import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { State } from "../type/type";
import { getBlogsByPage } from "../redux/slice";
import Card from "./Card";
import SectionCountainer from "./SectionCountainer";

const generatePageNumbers = (
  currentPage: number,
  totalPages: number
): (number | "...")[] => {
  if (totalPages < 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
  }
  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    "...",
    totalPages - 2,
    totalPages - 1,
    totalPages,
  ];
};

const AllBlogs = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: State) => state.theme);
  const { currentBlogs, currentPage, totalPages } = useSelector(
    (state: State) => state.blogs
  );

  useEffect(() => {
    dispatch(getBlogsByPage(1));
  }, [dispatch]);

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <SectionCountainer title=" All Blog Posts">
      <div className="mb-[30px] grid gap-6 2xl:grid-cols-2 3xl:grid-cols-3">
        {currentBlogs.map((blog) => (
          <Card key={blog.id} cover={blog.coverImage} {...blog} col={1} />
        ))}
      </div>

      <div className="flex justify-between items-center py-5 border-t-[1px] border-b-[1px] 2xl:border-b-0  border-[#EAECF0] dark:border-[#EAECF057] flex-col 2xl:flex-row">
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(getBlogsByPage(currentPage - 1))}
          className={`px-3 py-1 text-sm font-medium rounded-md flex justify-center items-center gap-3 text-[#667085] dark:text-[#EFEFEF] ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
        >
          <img
            src={
              theme === "dark"
                ? "/icons/white-left-arrow.svg"
                : "/icons/dark-left-arrow.svg"
            }
            alt="left-arrow"
            className={`w-4 h-4 transition duration-200 ${
              currentPage === 1 ? "grayscale brightness-150" : ""
            }`}
          />
          Previous
        </button>

        <div className="flex items-center mt-5 2xl:mt-0">
          {pageNumbers.map((page, idx) =>
            page === "..." ? (
              <span
                key={`ellipsis-${idx}`}
                className="text-[#667085] dark:text-[#EFEFEF]"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => dispatch(getBlogsByPage(page))}
                className={`w-10 h-10 rounded-lg text-sm font-medium cursor-pointer ${
                  currentPage === page
                    ? "bg-[#F9F5FF] text-[#7F56D9] dark:text-[#112211]"
                    : "text-[#667085] hover:bg-gray-100 dark:text-[#EFEFEF] dark:hover:text-[#4a3e63]"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => dispatch(getBlogsByPage(currentPage + 1))}
          className={`px-3 py-1 mt-5 2xl:mt-0 text-sm font-medium rounded-md flex justify-center items-center gap-3 text-[#667085] dark:text-[#EFEFEF] ${
            currentPage === totalPages
              ? "text-gray-400 opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Next
          <img
            src={
              theme === "dark"
                ? "/icons/white-right-arrow.svg"
                : "/icons/dark-right-arrow.svg"
            }
            alt="right-arrow"
            className={`w-4 h-4 transition duration-200 ${
              currentPage === totalPages ? "grayscale brightness-150" : ""
            }`}
          />
        </button>
      </div>
    </SectionCountainer>
  );
};

export default AllBlogs;
