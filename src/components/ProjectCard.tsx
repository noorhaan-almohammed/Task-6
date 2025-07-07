import { Link } from "react-router";
import type { projectType } from "../type/type";

function ProjectCard({ project }: { project: projectType }) {
  return (
    <div
      className="rounded-sm shadow dark:shadow-grey-text overflow-hidden dark:bg-dark-blue
              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#22203f49]"
    >
      <div className="p-2 space-y-3 group">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[1.7] group  w-full  object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="text-xl font-semibold text-dark-text dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-grey-text dark:text-dark-blog-text dark:group-hover:text-white">
          {project.description}
        </p>
        <Link
          to={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-blue dark:text-[#f1eaff] text-sm font-medium inline-block my-4 float-end dark:group-hover:text-[#bbabdf] group-hover:text-date-text"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
