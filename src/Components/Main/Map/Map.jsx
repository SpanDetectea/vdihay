import { useSelector } from "react-redux";
import "./Map.scss";
import PlaceRect from "./PlaceRect";

function Map({ peopleCnt, start, end, curPlace, setCurPlace, width = 510, height = 500 }) {
  const walls = useSelector((state) => state.reservation.walls);
  const places = useSelector((state) => state.reservation.places);

  const handleClick = (id) => {
    setCurPlace(id);
  };

  return (
    <div className="map">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ border: "2px solid #ccc", backgroundColor: "#f9f9f9",borderRadius: "15px" }}
      >
        {walls.map((wall, i) => (
          <line
            key={`wall-${i}`}
            x1={wall.x1}
            y1={wall.y1}
            x2={wall.x2}
            y2={wall.y2}
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
            />
          );
        })}
      </svg>
    </div>
  );
}

export default Map;
