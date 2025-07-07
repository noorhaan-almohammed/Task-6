import { Link } from "react-router";
import type { FooterType } from "../type/type";

function Footer({footerData}: {footerData: FooterType[]}) {
  return (
    <div className="mt-8">
      <div className="pt-8 pb-6 flex flex-col-reverse 2xl:flex-row gap-8 justify-center 2xl:justify-start items-center text-[20px] text-dark-text dark:text-white font-normal"> {/*leading-6 in figma but I don't like it*/}
        <p>&copy; {new Date().getFullYear()}</p>
        <div className="flex flex-col 2xl:flex-row justify-center items-center gap-3.5">
          {footerData.map((data, index) => {
            return (
              <Link to={data.link} key={index}
              >
                {data.content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
