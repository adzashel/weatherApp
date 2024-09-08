import guts from "../assets/Assets/wind.png";
import humidity from "../assets/Assets/humidity.png";
import sunrise from "../assets/Assets/sunrise.png";
import WeatherInfo from "./WeatherInfo";

const WeatherBody = ({ weatherData }) => {
  return (
    <>
      <WeatherInfo weatherData={ weatherData }/>

      <div className="aside-weather">
        <div >
          <img src={humidity} alt="" className="aside"/>
          <p>Humidity: {weatherData.humidity} %</p>
        </div>
        <div >
          <img src={guts} alt="" className="aside"/>
          <p>Wind: {weatherData.wind} km/h</p>
        </div>
        <div >
          <img src={sunrise} alt="" className="sunrise"/>
          <p>Sunrise: {weatherData.sunrise}</p>
        </div>
        <div >
          <img src={sunrise} alt="" className="sunrise"/>
          <p>Sunset : {weatherData.sunset}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherBody;
