import "./theme-switch.css";

interface ThemeSwitchType {
  theme: any;
  onToggle: any;
}

const ThemeSwitch = ({ theme, onToggle }: ThemeSwitchType) => (
  <label className="switch">
    <input onClick={onToggle} type="checkbox" checked={theme === "dark"} />
    <span className="slider round"></span>
  </label>
);

export default ThemeSwitch;
