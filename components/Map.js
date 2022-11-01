import { useState } from "react";
import ReactMapGl from "react-map-gl";

const Map = () => {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: -0.0022275,
    latitude: 51.5421655,
    zoom: 12,
  });
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/student1902/cl9wa2yds000b14nzwrmpnlzf"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      // onViewportChange={(viewport)=> setViewPort(viewport)}
      onViewportChange={viewport=> console.log(viewport)}
    ></ReactMapGl>
  );
};

export default Map;
