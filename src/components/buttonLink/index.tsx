import "./styles.scss";

interface IButtonLink {
  title: string;
  img?: any;
  link: string;
}

const ButtonLink: React.FC<IButtonLink> = ({ img, title, link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={img} alt={title} />
      {title}
    </a>
  );
};

export default ButtonLink;
