import WalkingRouteMap from "./WalkingRouteMap";

function App() {
  return (
    <div>
      <WalkingRouteMap
        origin={{ lat: 34.03925920478031, lng: -84.58182061858527 }}
        destination={{ lat: 34.03868425275164, lng: -84.58055958373744 }}
      />
    </div>
  );
}

export default App;
