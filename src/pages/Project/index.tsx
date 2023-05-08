import { useParams } from "react-router";
import ButtonLink from "../../components/buttonLink";
import gitHubicon from "../../assets/icons/gitHub-black.svg";
import { projectsData } from "../../config/projectsList";
import "./styles.scss";

const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const projectId = Number(id);

  if (isNaN(projectId) || projectId > projectsData.length - 1) {
    return null;
  } else {
    const { title, skills, img, gitHubLink } = projectsData[projectId];
    return (
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{title}</h1>

            <img src={img} alt={title} className="project-details__cover" />

            <div className="project-details__desc">
              <p>Skills: {skills}</p>
            </div>
            <ButtonLink
              title="GitHub Repo"
              img={gitHubicon}
              link={gitHubLink}
            />
          </div>
        </div>
      </main>
    );
  }
};

export default ProjectPage;
