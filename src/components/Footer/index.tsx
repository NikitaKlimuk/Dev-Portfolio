import "./styles.scss";
import insta from "../../assets/icons/instagram.svg";
import gitHub from "../../assets/icons/gitHub.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={insta} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Mikita Klimuk</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
