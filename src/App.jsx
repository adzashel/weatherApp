import "./App.css";
import Weather from "./Componenst/Weather";
import moduleName from './assets/Assets/bg.mp4'

function App() {
  return (
    <>
      <div className="app">
        <video autoPlay muted loop id="myVideo">
          <source src={moduleName } type="video/mp4" />
        </video>
        <Weather />
      </div>
    </>
  );
}

export default App;
