const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="icon-wrapper">
      <div className="mobile-weather">
        <h3 className="mobile-temp">{weatherData.temp}°</h3>
        <img src={weatherData.icon} alt="weather-ico3n" className="icon" />
        <h3 className="mobile-temp">{weatherData.feelsLike}°</h3>
      </div>
      <h1>{weatherData.city}</h1>
      {/* display Temp */}
      <h2 className="temp">{weatherData.temp}°C</h2>
      <h4 className="feel">( Feels like {weatherData.feelsLike}°C)</h4>
      {/* Display Weather */}
      <p>{weatherData.description}</p>
    </div>
  );
};

export default WeatherInfo;
