import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../api/contexts/WeatherContext";
import { getRealTimeWeather, getForecastWeather } from "../../../api/services/api.service";
import WeatherData from "../../components/WeatherData/WeatherData";
import navigatorLocalisationData from "../../functions/getNavPosition";

const Home = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const { weather, setWeather, forecast, setForecast } = useContext(WeatherContext);
  console.log("weather: ", weather);
  console.log("forecast: ", forecast);

  const getWeatherFunction = async () => {
    const response = await getRealTimeWeather(
      lat,
      lon,
      process.env.REACT_APP_API_KEY
    );
    setWeather(response);
  };

  const getForecastWeatherFunction = async () => {
    const response = await getForecastWeather(lat, lon, process.env.REACT_APP_API_KEY);
    setForecast(response);
  };

  useEffect(() => {
    navigatorLocalisationData(setLat, setLon);
    getWeatherFunction();
    getForecastWeatherFunction();
  }, [lon, lat]);
  return (
    <>
      <WeatherData />
    </>
  );
};

export default Home;
