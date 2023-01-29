import { useContext, useEffect, useState } from "react";
import Search from "../../assets/icons/search.png";
import {
  getForecastWeatherByCity,
  getRealTimerWeatherByCity,
} from "../../../api/services/api.service";
import { WeatherContext } from "../../../api/contexts/WeatherContext";

const CityChangeInput = () => {
  const [city, setCity] = useState("");
  const { setWeather, setForecast } = useContext(WeatherContext);
  const handleSubmitCity = async (e) => {
    e.preventDefault();
    try {
      const reponse = await getRealTimerWeatherByCity(city);
      setWeather(reponse);
      const forecastResponse = await getForecastWeatherByCity(city);
      setForecast(forecastResponse);
      setCity("");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <form className="input-wrapper" onSubmit={handleSubmitCity}>
        <img src={Search} alt="" />
        <input
          type="text"
          placeholder="Search places"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      </form>
    </>
  );
};

export default CityChangeInput;
