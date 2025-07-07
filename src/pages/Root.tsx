import { Outlet } from "react-router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Theme, type State } from "../type/type";
import { useEffect } from "react";
import { footerData, NavBarData } from "../dataContent/OtherData";
import AOS from "aos";
import "aos/dist/aos.css";

function Root() {
  const theme = useSelector((state: State) => state.theme);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);
  useEffect(() => {
    if (theme === Theme.Dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className=" p-5 3xl:py-[30px] 3xl:px-28 dark:bg-dark-blue bg-white font-[inter] overflow-hidden">
      <Navbar NavBarData={NavBarData} name="Nourhan Almohammed" />
      <Outlet />
      <Footer footerData={footerData} />
    </div>
  );
}

export default Root;
