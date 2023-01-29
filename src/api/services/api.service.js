import axios from "axios";

const getRealTimeWeather = async (lat, lon) => {
  const response = await axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}&aqi=yes&lang=fr`
    )
    .catch((err) => {
      console.log("city not found !");
    });
  return response.data;
};

const getRealTimerWeatherByCity = async (city) => {
  const response = await axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=yes&lang=fr`
    )
    .catch((err) => {
      console.log("city not found !");
    });
  return response.data;
};

const getForecastWeatherByCity = async (city) => {
  const response = await axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=3&aqi=yes&alerts=no&lang=fr`
    )
    .catch((err) => {
      console.log("city not found !");
    });
  const { forecast } = response.data;

  const modeledForecast = forecast.forecastday.map((day) => {
    const { date, day: dayData } = day;
    const { maxtemp_c, mintemp_c, maxtemp_f, mintemp_f } = dayData;
    const { astro } = day;
    const { sunrise, sunset } = astro;
    const { condition } = dayData;
    const { code } = condition;
    return {
      date,
      maxtemp_c,
      mintemp_c,
      maxtemp_f,
      mintemp_f,
      code,
      sunrise,
      sunset,
    };
  });
  return modeledForecast;
};

const getForecastWeather = async (lat, lon) => {
  const response = await axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${lon}&days=3&aqi=yes&alerts=no&lang=fr`
    )
    .catch((err) => {
      console.log("city not found !");
    });
  const { forecast } = response.data;

  const modeledForecast = forecast.forecastday.map((day) => {
    const { date, day: dayData } = day;
    const { maxtemp_c, mintemp_c, maxtemp_f, mintemp_f } = dayData;
    const { astro } = day;
    const { sunrise, sunset } = astro;
    const { condition } = dayData;
    const { code } = condition;
    return {
      date,
      maxtemp_c,
      mintemp_c,
      maxtemp_f,
      mintemp_f,
      code,
      sunrise,
      sunset,
    };
  });
  return modeledForecast;
};

export {
  getRealTimeWeather,
  getForecastWeather,
  getRealTimerWeatherByCity,
  getForecastWeatherByCity,
};
