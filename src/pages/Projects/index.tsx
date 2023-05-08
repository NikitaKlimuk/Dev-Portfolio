import "./styles.scss";
import Project from "../../components/Project";
import { projectsData } from "../../config/projectsList";

const ProjectsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsData.map((item, index) => {
            return (
              <Project
                key={index}
                title={item.title}
                img={item.img}
                link={item.gitHubLink}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
