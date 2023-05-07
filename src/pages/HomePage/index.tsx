// import "./styles.scss";

const HomePage = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Mikita</em>
            </strong>
            <br />
            I'm a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="#!" className="btn">
            Show My CV
          </a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                TypeScript, JavaScript, React, React Router, Redux, Redux
                Toolkit, RTK Query, Storybook, Jest, React Testing Library, REST
                Api, React Native, HTML, SASS, LESS, SCSS, NPM, Webpack, Gulp,
                BootStrap, Tailwind CSS, BEM, Jira, Agile, Figma
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HomePage;
