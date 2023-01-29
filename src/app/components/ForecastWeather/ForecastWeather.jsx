import { useContext } from "react";
import { WeatherContext } from "../../../api/contexts/WeatherContext";
import { UnitContext } from "../../../api/contexts/UnitContext";
import moment from "moment";
import "moment/locale/fr";
import getDynamicWeatherIcon from "../../functions/dynamicWeatherIcon";

const ForecastWeather = () => {
  const { unit } = useContext(UnitContext);
  const { forecast } = useContext(WeatherContext);
  return (
    <div className="forecast-grid">
      {forecast[0] &&
        forecast.map((day, index) => {
          return (
            <div className="forecast-day" key={index}>
              <span className="forecast-day-name">
                {moment(day.date).format("dddd")}
              </span>

              <img
                className="forecast-day-img"
                src={getDynamicWeatherIcon(day.code)}
                alt=""
              />

              <div className="row alignCenter">
                <span className="forecast-day-temp-max">
                  {unit === "metric" ? (
                    <>{Math.round(day.maxtemp_c)}°C</>
                  ) : (
                    <>{Math.round(day.maxtemp_f)}°F</>
                  )}
                </span>{" "}
                <span className="forecast-day-temp-min">
                  {unit === "metric" ? (
                    <>{Math.round(day.mintemp_c)}°C</>
                  ) : (
                    <>{Math.round(day.mintemp_f)}°F</>
                  )}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ForecastWeather;
