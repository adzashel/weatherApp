import AsideWeather from "./AsideWeather";
import WeatherInfo from "./WeatherInfo";

const WeatherBody = ({ weatherData }) => {
  return (
    <>
      <WeatherInfo weatherData={ weatherData }/>
      <AsideWeather weatherData={ weatherData }/>
    </>
  );
};

export default WeatherBody;
