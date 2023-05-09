import "./styles.scss";
import { projectsData } from "../../config/projectsList";
import ProjectCart from "../../components/ProjectCart";

const ProjectsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsData.map((item, index) => {
            return (
              <ProjectCart
                key={index}
                title={item.title}
                img={item.img}
                link={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
