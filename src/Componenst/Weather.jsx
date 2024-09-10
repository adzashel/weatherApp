import sun from "../assets/Assets/sunny.png";
import drizzle from "../assets/Assets/drizzle.png";
import rain from "../assets/Assets/rain.png";
import clouds from "../assets/Assets/cloud.png";
import moonCLoud from "../assets/Assets/nightClouds.png";
import snow from "../assets/Assets/snow.png";
import { useState } from "react";
import thunderstorm from "../assets/Assets/storm.png";
import fog from "../assets/Assets/fog.png";
import rainyNight from "../assets/Assets/nightRain.png";
import nightFog from "../assets/Assets/nightFog.png"
import Loader from "./Loader";
import Header from "./Header";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBody from "./WeatherBody";
import nightlightRain from '../assets/Assets/nightlightRain.png'
import daylightRain from '../assets/Assets/daylightRain.png'
import moon from '../assets/Assets/moon.png';
import scatteredClouds from '../assets/Assets/scatteredClouds.png'

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": sun,
    "01n": moon,
    "02d": drizzle,
    "02n": rainyNight,
    "03d": clouds,
    "03n": moonCLoud,
    "04d": scatteredClouds,
    "04n": scatteredClouds,
    "09d": rain,
    "09n": rainyNight,
    "10d": daylightRain,
    "10n": nightlightRain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": fog,
    "50n": nightFog,
  };

  // api source
  const api = {
    key: "cb824134ddf38ef20055089133da45d9",
    baseURL: "https://api.openweathermap.org/data/2.5/",
  };

  // fetch api
  const handleSearch = async () => {
    // fetch weather data for the city
    try {
      setLoader(true);
      const response = await fetch(
        `${api.baseURL}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const result = await response.json();
      const icon = allIcons[result.weather[0].icon] || snow;
      setWeatherData({
        city: result.name,
        temp: Math.floor(result.main.temp),
        feelsLike: Math.floor(result.main.feels_like),
        description: result.weather[0].description,
        humidity: result.main.humidity,
        wind: result.wind.speed,
        icon: icon,
        // sunrise and sunset
        sunrise: new Date(result.sys.sunrise * 1000).toLocaleTimeString(
          "en-IN"
        ),
        sunset: new Date(result.sys.sunset * 1000).toLocaleTimeString("en-IN"),
      });
      setSearch("");
      console.log(result);
      setLoader(false);
    } catch (e) {
      alert(`${ search } is not exist`, e);
    }
  };

  return (
    <div className="weather">
      <Header setSearch={setSearch} onHandleSearch={handleSearch} />
      { loader ? (
        <Loader/>
        ) : weatherData ? (
          <WeatherBody weatherData={weatherData} />
        ) :  (
          <div className="alert">
            <Alert variant="success">Enter City name </Alert>
          </div>
        )} 
    </div>
  );
};

export default Weather;
