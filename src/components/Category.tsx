import React from "react";

const Category = React.memo(function Category({
  bg = "bg-gray-200",
  text = "text-gray-900",
  item,
}: {
  bg?: string;
  text?: string;
  item: string;
}) {
  return (
    <span className={`rounded-2xl px-2.5 py-0.5 text-sm font-medium ${bg} ${text}`}>
      {item}
    </span>
  );
});

export default Category;
