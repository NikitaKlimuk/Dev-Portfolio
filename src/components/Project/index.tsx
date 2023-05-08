import "./styles.scss";

interface IProject {
  title: string;
  skills?: string;
  img: any;
  link: string;
}

const Project: React.FC<IProject> = ({ title, skills, img, link }) => {
  return (
    <li className="project">
      <a href={link}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
};

export default Project;
