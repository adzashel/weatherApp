import moduleName from "../assets/Assets/bg.mp4"
const BgVideo = () => {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
          <source src={moduleName } type="video/mp4" />
        </video>
    </div>
  )
}

export default BgVideo;
