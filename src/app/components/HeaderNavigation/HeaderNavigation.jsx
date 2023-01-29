import { NavLink } from "react-router-dom";
import UnitButton from "../UnitButton/UnitButton";

const HeaderNavigation = () => {
  return (
    <nav>
      <div className="row alignCenter">
        <NavLink to="/" className="weather-forecast">
          {" "}
          Weather It{" "}
        </NavLink>
      </div>

      <div className="row alignCenter">
        <UnitButton />
      </div>
    </nav>
  );
};

export default HeaderNavigation;
