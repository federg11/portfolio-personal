import ProjectCard from "./ProjectCard";
import Projects from '../data/projects.js';

const ProjectsSection = () => {

    return (
        <div id="projects" className="project-section py-5">
            <div className="container">
                <h2 className="mb-5 text-center text-white mt-5">Mis Proyectos</h2>
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <div className="row g-4">
                        {
                            Projects.map((project) => <ProjectCard key={project.id}
                                image={project.image} title={project.title}
                                description={project.description}
                                repo={project.repo}
                                link={project.link}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProjectsSection