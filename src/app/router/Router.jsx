import { Route, Routes } from "react-router-dom";
import WeatherDataPage from "../pages/WeatherDataPage/WeatherDataPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherDataPage />} />
    </Routes>
  );
};

export default Router;
