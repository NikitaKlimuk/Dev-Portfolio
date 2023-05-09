import { NavLink } from "react-router-dom";
import { IProject } from "../../interface/Project";
import "./styles.scss";

const ProjectCart: React.FC<IProject> = ({ title, img, link }) => {
  return (
    <NavLink to={`/project/${link}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default ProjectCart;
