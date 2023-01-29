import { createContext, useState } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, forecast, setForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };
