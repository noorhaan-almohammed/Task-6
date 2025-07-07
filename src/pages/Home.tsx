import AllBlogs from "../components/AllBlogs";
import CurrentBlogsSection from "../components/CurrentBlogsSection";
import Hero from "../components/Hero";
import { useEffect } from "react";
import AOS from "aos";

function Home() {
  useEffect(() => {
  AOS.refresh();
}, []);

  return (
    <div className="mt-16 2xl:mt-24 3xl:mt-28">
      <Hero title="THE BLOG" />
      <CurrentBlogsSection />
      <AllBlogs />
    </div>
  );
}

export default Home;
