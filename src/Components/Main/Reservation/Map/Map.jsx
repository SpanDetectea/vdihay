import { useSelector } from "react-redux";
import "./Map.scss";
import PlaceRect from "./PlaceRect/PlaceRect";
import { useResize } from "../../../../Hooks/useResize";

function Map({
  peopleCnt,
  start,
  end,
  curPlace,
  setCurPlace,
  width = 510,
  height = 500,
}) {
  const walls = useSelector((state) => state.reservation.walls);
  const places = useSelector((state) => state.reservation.places);

  const handleClick = (id) => {
    setCurPlace(id);
  };
  const screenWidth = useResize();
  let delta = 1;
  if (screenWidth.isScreenXxl) {
    delta = 1;
    if (screenWidth.isScreenXl) {
      delta = 0.8;
      if (screenWidth.isScreenLg) {
        delta = 0.6;
        if (screenWidth.isScreenMd) {
          delta = 0.4;
          if (screenWidth.isScreenSm) {
            delta = 0.4;
          }
        }
      }
    }
  }
  return (
    <div className="map">
      <svg
        width={width * delta}
        height={height * delta}
        viewBox={`0 0 ${width * delta} ${height * delta}`}
        style={{
          border: "2px solid #ccc",
          backgroundColor: "#f9f9f9",
          borderRadius: "15px",
        }}
      >
        {walls.map((wall, i) => (
          <line
            key={`wall-${i}`}
            x1={wall.x1 * delta}
            y1={wall.y1 * delta}
            x2={wall.x2 * delta}
            y2={wall.y2 * delta}
            stroke="black"
            strokeWidth="2"
          />
        ))}

        {places.map((place, index) => {
          return (
            <PlaceRect
              key={index}
              place={place}
              start={start}
              end={end}
              peopleCnt={peopleCnt}
              onClick={handleClick}
              curPlace={curPlace}
              delta={delta}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default Map;
