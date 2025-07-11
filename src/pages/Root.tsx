import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Theme, type State } from "../type/type";
import { useEffect, useState } from "react";
import { footerData, NavBarData } from "../dataContent/OtherData";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Root() {
  const theme = useSelector((state: State) => state.theme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-out",
        delay: 100,
        once: true,
      });
      AOS.refresh();
    }
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    if (theme === Theme.Dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      {loading && <Loader />}
      <div className=" p-5 3xl:py-[30px] 3xl:px-28 dark:bg-dark-blue bg-white font-[inter] overflow-hidden">
        <Navbar NavBarData={NavBarData} name="Nourhan Almohammed" />
        <Outlet />
        <Footer footerData={footerData} />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default Root;
