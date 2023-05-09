import { useEffect, useState } from "react";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import "./styles.scss";

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`dark-mode-btn ${darkMode ? "dark-mode-btn--active" : ""}`}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default ButtonDarkMode;
