import SectionCountainer from "../components/SectionCountainer";
import { projects } from "../dataContent/OtherData";
import ProjectCard from "../components/ProjectCard";
import Feed from "../components/Feed";

function Projects() {
  return (
    <div className="mt-16 2xl:mt-24 3xl:mt-28 space-y-13 2xl:space-y-[72px] 3xl:space-y-8">
      <SectionCountainer title="Our Projects">
        <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
           <ProjectCard project={project} key={index}/>
          ))
          }
        </div>
      </SectionCountainer>

      <SectionCountainer title="What People Are Saying">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
          <Feed index="1" name="Huda K" content="One of the best content platforms I've come across. Beautiful
              design and quality writing."/>
 
          <Feed index="2" name="Youssef A" content="I visit this site almost daily. The articles are always fresh,
              insightful, and useful.."/>
          
          <Feed index="3" name="Huda K" content="One of the best content platforms I've come across. Beautiful
              design and quality writing."/>

          <Feed index="4" name="Youssef A" content="I visit this site almost daily. The articles are always fresh,
              insightful, and useful.."/>
        </div>
      </SectionCountainer>
    </div>
  );
}

export default Projects;
