import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="cursor-pointer fixed bottom-6 right-6 z-50 bg-dark-blue dark:bg-blue-950 text-white p-4 rounded-full shadow-lg dark:hover:bg-gray-300 hover:bg-blue-950 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <img src="/icons/white-double-arrow.png" alt="up" className="size-5"/>
      </button>
    )
  );
}

export default ScrollToTopButton;
