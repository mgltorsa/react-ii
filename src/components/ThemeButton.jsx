import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
    >
      Cambiar tema
    </button>
  );
};

export default ThemeButton;
