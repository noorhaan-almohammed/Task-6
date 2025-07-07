import Member from "../components/Member";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionCountainer from "../components/SectionCountainer";

function About() {
  return (
    <div className="mt-16 2xl:mt-24 3xl:mt-28 space-y-13 2xl:space-y-[72px] 3xl:space-y-8">
      <SectionCountainer title="About Us">
        <div className="text-[18px] font-normal text-dark-text dark:text-dark-blog-text space-y-3">
          <p>
            Welcome to our blog platform — a space where ideas, insights, and inspiration come to life.
            Our mission is to provide thoughtful articles, practical tips, and engaging stories across a wide range of topics.
          </p>

          <p>
            Whether you're here to learn, explore, or simply unwind with some good reads, we've got something for you.
            We believe in quality content, clarity of thought, and a seamless reading experience.
          </p>

          <p>
            Thank you for being part of our journey. Stay curious, stay inspired.
          </p>
        </div>
      </SectionCountainer>

  <SectionCountainer title="Our Team">
  <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-14">
    <Member image="/mem.jpg" name="Sarah Ahmad" position="Editor-in-Chief" />
    <Member image="/mem.jpg" name="Omar Elbaz" position="Lead Content Strategist" />
    <Member image="/mem.jpg" name="Layla Mansour" position="Community Manager" />
    <Member image="/mem.jpg" name="Ali Zaki" position="UI/UX Designer" />
    <Member image="/mem.jpg" name="Dina Harb" position="SEO Specialist" />
    <Member image="/mem.jpg" name="Khaled N." position="Backend Developer" />
  </div>
</SectionCountainer>


    
      <NewsLetterSection title="Contact Us"  brief = "Contact Us to learn about new product features, the latest in technology, solutions, and updates." btn = "Send"/>
    </div>
  );
}

export default About;
