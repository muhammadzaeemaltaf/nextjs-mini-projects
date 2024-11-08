import Project from "@/components/Project";
import { obj } from "@/utils";

const Projects = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 px-10 lg:grid-cols-2">
    {obj.map((project) => (
      <Project
        key={project.projectURL} // Ensure unique key
        projectName={project.projectName}
        projectDescription={project.projectDescription}
        projectURL={project.projectURL}
        projectImage={project.projectImage}
      />
    ))}
  </div>  )
}

export default Projects