import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import { GrProjects } from "react-icons/gr";

function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8 md:px-12 lg:px-16 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-10 inline-flex items-center justify-center gap-3">
        <GrProjects className="text-3xl text-red-500" />
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {user_info.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
