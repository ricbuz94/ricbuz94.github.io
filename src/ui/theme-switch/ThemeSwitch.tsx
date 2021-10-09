import "./theme-switch.css";
import { MouseEventHandler } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

interface ThemeSwitchType {
  theme: any;
  onChange: MouseEventHandler<HTMLInputElement>;
}

const ThemeSwitch = ({ theme, onChange }: ThemeSwitchType) => {
  const isDark = theme === "dark" || false;
  return (
    <div className="switch-input" onClick={onChange}>
      {!isDark ? (
        <FiSun className="switch-icon" />
      ) : (
        <FiMoon className="switch-icon" />
      )}
    </div>
  );
};

export default ThemeSwitch;
