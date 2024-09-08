
function WeatherInfo({ weatherData }) {
  return (
    <div className="icon-wrapper">
        <img src={weatherData.icon} alt="weather-ico3n" className="icon" />
        <h1>{weatherData.city}</h1>
        {/* display Temp */}
        <h2 className="temp">{weatherData.temp}°C</h2>
        <h4>( Feels like {weatherData.feelsLike}°C)</h4>
        {/* Display Weather */}
        <p>{weatherData.description}</p>
      </div>
  )
}

export default WeatherInfo
