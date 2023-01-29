import { createContext, useState } from "react";

const UnitContext = createContext();

const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

export { UnitProvider, UnitContext };
