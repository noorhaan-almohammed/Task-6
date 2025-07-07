import { useState } from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Theme, type NavBarType, type State } from "../type/type";
import { setTheme } from "../redux/slice/theme";

export default function Navbar({NavBarData, name} : {NavBarData: NavBarType[], name: string}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state: State) => state.theme);
  const darkMode = theme === Theme.Dark;

  const toggleTheme = () => {
    const newTheme = darkMode ? Theme.Light : Theme.Dark;
    dispatch(setTheme(newTheme));
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] 2xl:h-24 3xl:h-28 flex items-center justify-between w-full bg-white dark:bg-dark-blue text-dark-text dark:text-white z-50 px-5 3xl:py-10 3xl:px-28">
      
      <NavLink
        to="/"
        className="font-semibold text-[18px] 3xl:text-[20px] text-dark-text dark:text-white"
      >
        {name}
      </NavLink>

      <nav className="hidden 2xl:flex items-center gap-6 text-[18px] 2xl:text-[20px]">
        {NavBarData.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className={({ isActive }) =>
              `relative hover:text-primary transition-colors duration-200 font-normal ${
                isActive
                  ? "after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-px after:bg-dark-text dark:after:bg-white"
                  : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
       
        <div
          className="flex items-center justify-evenly py-2 bg-dark-blue dark:bg-white rounded-full cursor-pointer w-24 h-10"
          onClick={toggleTheme}
        >
          <img
            src={darkMode ? "/icons/moon.svg" : "/icons/sun.svg"}
            alt="icon"
            className="order-1 dark:order-2"
          />
          <div className="w-6 h-6 dark:bg-dark-blue bg-white rounded-full order-2 dark:order-1"></div>
        </div>
      </nav>

      <button className="2xl:hidden" onClick={() => setMobileMenuOpen(true)}>
        <img
          src={darkMode ? "/icons/menu.svg" : "/icons/light-menu.svg"}
          alt="menu"
        ></img>
      </button>

      {mobileMenuOpen && (
        <div className="2xl:hidden fixed inset-0 bg-white dark:bg-dark-blue text-dark-text dark:text-white flex flex-col items-center justify-center gap-7 z-50">
          <NavLink
        to="/"
        className="font-semibold text-[18px] 3xl:text-[20px] mb-6"
      >
        Nourhan almohammed
      </NavLink>
          {NavBarData.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className="font-normal text-[18px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
         <div
          className="flex items-center justify-evenly py-2 bg-dark-blue dark:bg-white rounded-full cursor-pointer w-24 h-10"
          onClick={toggleTheme}
        >
          <img
            src={darkMode ? "/icons/moon.svg" : "/icons/sun.svg"}
            alt="icon"
            className="order-1 dark:order-2"
          />
          <div className="w-6 h-6 dark:bg-dark-blue bg-white rounded-full order-2 dark:order-1"></div>
        </div>

          <button onClick={() => setMobileMenuOpen(false)} className="absolute bottom-5">
            <img src={ darkMode ? "/icons/close.svg" : 
              "/icons/black-close.svg"} alt="close" />
          </button>
        </div>
      )}
    </header>
  );
}
