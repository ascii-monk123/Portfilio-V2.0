import Lamazon from "../../assets/img/lamazon.png";
import { FaGithub } from "react-icons/fa";
import Covid from "../../assets/img/covid.png";
import lightSky from "../../assets/img/lightsky.png";
import Projects from "../../utils/projectsFormat";
import Fade from "react-reveal/Fade";
const Project = () => {
  const proj = new Projects();
  const { projects } = proj;
  return (
    <div className="projects">
      <div className="container">
        {projects.map((project, index) => {
          if (index === 1)
            return (
              <div className="grid columns2 col-gap-1 project" key={index}>
                <Fade right>
                  <div className="project-content">
                    <h1 className="orange-gradient">{project.projectTitle}</h1>
                    <p className="project-description">{project.projectDesc}</p>
                    <p>
                      {" "}
                      <br />
                      <a href={project.projLink} target="_blank">
                        <span>
                          <FaGithub />
                        </span>
                        {project.isLive ? "View Project" : "View Source Code"}
                      </a>
                    </p>
                  </div>
                  <div className="project-image reverse">
                    <img
                      src={
                        project.projectTitle === "Light-Sky"
                          ? lightSky
                          : project.projectTitle === "Lamazon"
                          ? Lamazon
                          : Covid
                      }
                      alt={project.projectTitle}
                    />
                  </div>
                </Fade>
              </div>
            );

          return (
            <div
              key={index}
              className={`grid columns2 col-gap-1 ${
                index > 0 ? "project" : ""
              }`}
            >
              <Fade left>
                <div className="project-image">
                  <img
                    src={
                      project.projectTitle === "Light-Sky"
                        ? lightSky
                        : project.projectTitle === "Lamazon"
                        ? Lamazon
                        : Covid
                    }
                    alt={project.projectTitle}
                  />
                </div>
                <div className="project-content">
                  <h1 className="orange-gradient">{project.projectTitle}</h1>
                  <p className="project-description">{project.projectDesc}</p>
                  <p>
                    {" "}
                    <br />
                    <a href={project.projLink} target="_blank">
                      <span>
                        <FaGithub />
                      </span>
                      {project.isLive ? "View Project" : "View Source Code"}
                    </a>
                  </p>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
