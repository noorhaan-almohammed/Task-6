import { Link } from "react-router";

const NewsLetterSection = ({
  title = "Newlatters",
  subTitle = "Stories and interviews",
  brief = "Subscribe to learn about new product features, the latest in technology, solutions, and updates.",
  btn = "Subscribe",
}) => {
  return (
    <section className="flex flex-col pt-8 2xl:text-center">
      <h2 className="pb-3 font-semibold text-[#7F56D9]">{title}</h2>
      <h3 className="pb-6 text-5xl font-semibold text-dark-text dark:text-white">
        {subTitle}
      </h3>
      <p className="pb-10 text-xl font-normal text-grey-text dark:text-dark-blog-text">
        {brief}
      </p>
      <div className="2xl:grid-rows-2 grid w-full grid-flow-col grid-rows-3 2xl:justify-center gap-x-4 gap-y-2">
        <input
          className="w-full max-w-[360px] rounded-lg border-1 border-[#D0D5DD] bg-white px-4 py-3 placeholder:text-grey-text"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="2xl:order-2 order-1 w-28 cursor-pointer rounded-lg border-1 border-[#7F56D9] bg-[#7F56D9] px-5 py-3 text-white"
        >
          {btn}
        </button>
        <p className="2xl:order-1 order-2 text-start text-grey-text">
          We care about your data in our
          <Link to="#" className="underline ml-1">
            privacy policy
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NewsLetterSection;
