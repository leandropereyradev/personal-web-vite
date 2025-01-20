import Project from "./Project";
import projects from "../../../data/projects";

const Projects = () => {
  return (
    <section id="projects">
      {/* Section Title */}
      <h1 className="text-blue-400 text-center text-2xl font-bold mb-6 md:text-3xl lg:pt-6 lg:pb-10 xl:text-3xl">
        Proyectos
      </h1>

      {/* Project List */}
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
