import { useContext } from "react";
import { ThemeContext } from "../Theme-context";

const ColoeTheme = () => {
  const { toggle, dark, theme } = useContext(ThemeContext);
  return (
    <div
      className="container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="box">
        <div className="toggle-btn">
          <button
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            onClick={toggle}
          >
            {!dark ? "dark" : "light"}
          </button>
        </div>
        <div className="title">
          <h2>Indian Food</h2>
        </div>
        <div className="food-details">
          <p>
            Indian food is known for its rich flavors, aromatic spices, and
            diverse range of dishes. From spicy curries to savory snacks, Indian
            cuisine offers a wide variety of options that cater to different
            tastes and preferences. The use of spices such as cumin, coriander,
            turmeric, and garam masala gives Indian food its distinctive taste
            and aroma.
          </p>

          <p>
            One of the most popular dishes in Indian cuisine is curry. Curry can
            be made with a variety of ingredients such as vegetables, meat, or
            seafood, and is typically served with rice or bread. The combination
            of spices and herbs in curry creates a flavorful and aromatic dish
            that is loved by many. Each region in India has its own unique style
            of curry, with variations in ingredients and cooking techniques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColoeTheme;
