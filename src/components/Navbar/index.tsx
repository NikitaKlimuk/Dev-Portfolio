import "./styles.scss";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link ";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to="/">
            <strong>Frontend developer</strong> portfolio
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
