function Feed({
  index,
  name,
  content,
}: {
  index: string;
  name: string;
  content: string;
}) {
  const bgColor =
    parseInt(index) % 2 === 0 ? " bg-white border-white" : " bg-gray-300";

  return (
    <div
      className={`group rounded-xl p-6 shadow-2xl 2xl:border-3 2xl:border-[#d9d9d9] dark:border-0 dark:shadow-sm dark:shadow-gray-50 2xl:dark:bg-[#ccd9e7b7] ${bgColor} transition-all duration-300 hover:-translate-y-1 2xl:bg-[#d9d9d9] 2xl:hover:bg-gray-100 2xl:hover:border-gray-100`}
    >
      <p className="text-dark-blue italic group-hover:text-gray-900 ">
        “{content}”
      </p>
      <h5
        className="mt-6 font-semibold text-dark-blue dark:text-dark-blue
       "
      >
        — {name}.
      </h5>
    </div>
  );
}

export default Feed;
