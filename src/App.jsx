import { BrowserRouter } from "react-router-dom";
import Layout from "./app/layout/Layout";
import Router from "./app/router/Router";
import { WeatherProvider } from "./api/contexts/WeatherContext";
import { UnitProvider } from "./api/contexts/UnitContext";

function App() {
  return (
      <WeatherProvider>
        <UnitProvider>
          <BrowserRouter>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
        </UnitProvider>
      </WeatherProvider>
  );
}

export default App;
