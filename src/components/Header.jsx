import { useContext } from "react";
import { ThemeContext } from "../Theme-context";

const Header = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <header
        className="app-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: "none",
          }}
        >
          Toggle to {!dark ? "Dark" : "Light"}
        </button>
        <p>
          Click on the button to toggle between Dark and Light mode. You can
          close and re-open the tab or open a new tab of the same application,
          the mode is persisted.
        </p>
      </header>
    </div>
  );
};

export default Header;
