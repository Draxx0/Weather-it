import { useContext, useState } from "react";
import { UnitContext } from "../../../api/contexts/UnitContext";

const UnitButton = () => {
  const [selectedUnit, setSelectedUnit] = useState("metric");
  const { unit, setUnit } = useContext(UnitContext);

  const handleChangeUnit = () => {
    if (unit === "metric") {
      setUnit("imperial");
      setSelectedUnit("imperial");
    } else {
      setUnit("metric");
      setSelectedUnit("metric");
    }
  };

  return (
    <div className="unit-button row alignCenter">
      <div
        className={
          selectedUnit === "metric" ? "button-active" : "button-wrapper"
        }
        onClick={handleChangeUnit}
      >
        <span className="unit">°C</span>
      </div>
      <div
        className={
          selectedUnit === "imperial" ? "button-active" : "button-wrapper"
        }
        onClick={handleChangeUnit}
      >
        <span className="unit">°F</span>
      </div>
    </div>
  );
};

export default UnitButton;
