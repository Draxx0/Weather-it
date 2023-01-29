import { useContext, useEffect, useState } from "react";
import { UnitContext } from "../../../api/contexts/UnitContext";
import { WeatherContext } from "../../../api/contexts/WeatherContext";
import Rain from "../../assets/icons/rain.png";
import getDynamicWeatherIcon from "../../functions/dynamicWeatherIcon";
import moment from "moment";
import Night from "../../assets/images/Night.jpg";
import DayTime from "../../assets/images/daytime.jpg";
import "moment/locale/fr";

const CityData = () => {
  const { weather } = useContext(WeatherContext);
  const { unit } = useContext(UnitContext);
  const [currentTime, setCurrentTime] = useState(null);
  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    return `${hours}`;
  };

  useEffect(() => {
    setCurrentTime(getCurrentTime());
  }, []);
  return (
    <div className="city-data">
      {weather.current && (
        <>
          <img
            src={getDynamicWeatherIcon(weather.current.condition.code)}
            alt="city icon"
            className="city-icon"
          />
          <span className="city-temp">
            {unit === "metric" ? (
              <>{Math.round(weather.current.temp_c)}°C</>
            ) : (
              <>{Math.round(weather.current.temp_f)}°F</>
            )}
          </span>

          <div className="last-update">
            <span className="city-day">
              {moment(weather.current.last_updated).locale("fr").format("dddd")}{" "}
              <span className="gray">
                {moment(weather.current.last_updated).locale("fr").format("LT")}
              </span>
            </span>
          </div>

          <div className="weather-data">
            <div className="row alignCenter">
              <img
                src={getDynamicWeatherIcon(weather.current.condition.code)}
                alt=""
              />
              <span className="city-weather-description">
                {weather.current.condition.text}
              </span>
            </div>

            <div className="row">
              <img src={Rain} alt="" />
              <span className="city-weather-description">
                Humidité - {weather.current.humidity}%
              </span>
            </div>
          </div>

          <div className="city-name-container">
            <img
              src={currentTime <= 9 || currentTime >= 20 ? Night : DayTime}
              alt=""
              className="city-name-img"
            />
            <span className="city-name">
              {weather.location.name}, {weather.location.region},{" "}
              {weather.location.country}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CityData;
