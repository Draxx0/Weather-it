import { useContext, useEffect, useState } from "react";
import { UnitContext } from "../../../api/contexts/UnitContext";
import { WeatherContext } from "../../../api/contexts/WeatherContext";
import location from "../../assets/icons/location.png";
import Sunrise from "../../assets/icons/Sunrise.svg";
import Sunset from "../../assets/icons/Sunset.svg";
import weatherDataStatusLogic from "../../functions/weatherDataStatusLogic";
import ForecastWeather from "../ForecastWeather/ForecastWeather";
import Thermometer from "../../assets/icons/thermometer.svg";

const WeatherData = () => {
  const { weather, forecast } = useContext(WeatherContext);
  const { unit } = useContext(UnitContext);
  const [airQuality, setAirQuality] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [pressure, setPressure] = useState(null);

  useEffect(() => {
    if (weather.current) {
      setAirQuality(
        weatherDataStatusLogic.airQualityLogic(weather.current.air_quality.co)
      );
      setHumidity(
        weatherDataStatusLogic.humidityLogic(weather.current.humidity)
      );
      setPressure(
        weatherDataStatusLogic.pressureLogic(weather.current.pressure_mb)
      );
    }
  }, [weather.current]);
  return (
    <div className="today-highlight">
      <ForecastWeather />

      {weather.current && forecast[0] && (
        <>
          <h1>Temps d'aujourd'hui</h1>
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-item__header">
                <h3>Vent</h3>
              </div>

              <div className="highlight-item__body">
                <p>
                  {weather.current.wind_kph}
                  <span className="gray xs"> km/h</span>{" "}
                </p>
                <div className="row alignCenter">
                  <img src={location} alt="" />
                  <h2>
                    {weather.location.name}, {weather.location.country}
                  </h2>
                </div>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-item__header">
                <h3>Levé et couché du soleil</h3>
              </div>

              <div className="highlight-item__body">
                <div className="row alignCenter">
                  <img src={Sunrise} alt="" />
                  <p className="sun-status">{forecast[0].sunrise}</p>
                </div>

                <div className="row alignCenter">
                  <img src={Sunset} alt="" />

                  <p className="sun-status">{forecast[0].sunset}</p>
                </div>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-item__header">
                <h3>Ressenti</h3>
              </div>

              <div className="highlight-item__body">
                <p>
                  {unit === "metric" ? (
                    <>{Math.round(weather.current.feelslike_c)}°C</>
                  ) : (
                    <>{Math.round(weather.current.feelslike_f)}°F</>
                  )}
                </p>

                <img src={Thermometer} alt="" className="ressenti-img" />
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-item__header">
                <h3>Qualité de l'air</h3>
              </div>

              <div className="highlight-item__body">
                <p>{Math.round(weather.current.air_quality.co)}</p>
                <div className="row alignCenter">
                  <h4 className="gray">
                    Status : <span className={airQuality}>{airQuality}</span>
                  </h4>
                </div>

                <div
                  className={
                    airQuality === "Mauvaise"
                      ? "status-bar status-high"
                      : airQuality === "Moyenne"
                      ? "status-bar status-medium"
                      : "status-bar status-low"
                  }
                >
                  <div className="wrapper">
                    <div
                      className={
                        airQuality === "Mauvaise"
                          ? "circle-status circle-high"
                          : airQuality === "Moyenne"
                          ? "circle-status circle-medium"
                          : "circle-status circle-low"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-item__header">
                <h3>Humidité</h3>
              </div>

              <div className="highlight-item__body">
                <p>
                  {Math.round(weather.current.humidity)}{" "}
                  <span className="gray xs">%</span>
                </p>
                <div className="row alignCenter">
                  <h4 className="gray">
                    Status : <span className={humidity}>{humidity}</span>
                  </h4>
                </div>

                <div
                  className={
                    humidity === "Haute"
                      ? "status-bar status-high"
                      : humidity === "Moyenne"
                      ? "status-bar status-medium"
                      : "status-bar status-low"
                  }
                >
                  <div className="wrapper">
                    <div
                      className={
                        humidity === "Haute"
                          ? "circle-status circle-high"
                          : humidity === "Moyenne"
                          ? "circle-status circle-medium"
                          : "circle-status circle-low"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-item__header">
                <h3>Pression</h3>
              </div>

              <div className="highlight-item__body">
                <p>
                  {Math.round(weather.current.pressure_mb)}{" "}
                  <span className="gray xs">mb</span>
                </p>
                <div className="row alignCenter">
                  <h4 className="gray">
                    Status : <span className={pressure}>{pressure}</span>
                  </h4>
                </div>

                <div
                  className={
                    pressure === "Haute"
                      ? "status-bar status-high"
                      : pressure === "Moyenne"
                      ? "status-bar status-medium"
                      : "status-bar status-low"
                  }
                >
                  <div className="wrapper">
                    <div
                      className={
                        pressure === "Haute"
                          ? "circle-status circle-high"
                          : pressure === "Moyenne"
                          ? "circle-status circle-medium"
                          : "circle-status circle-low"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherData;
