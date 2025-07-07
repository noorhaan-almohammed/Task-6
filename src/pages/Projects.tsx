import SectionCountainer from "../components/SectionCountainer";
import { feeds, projects } from "../dataContent/OtherData";
import ProjectCard from "../components/ProjectCard";
import Feed from "../components/Feed";

function Projects() {
  return (
    <div className="mt-16 2xl:mt-24 3xl:mt-28 space-y-13 2xl:space-y-[72px] 3xl:space-y-8">
      <SectionCountainer title="Our Projects">
        <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-offset="100"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </SectionCountainer>

      <SectionCountainer title="What People Are Saying">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
          {feeds.map((feed, index) => (
            <div
              key={feed.index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-offset="100"
            >
              <Feed {...feed} />
            </div>
          ))}
        </div>
      </SectionCountainer>
    </div>
  );
}

export default Projects;
