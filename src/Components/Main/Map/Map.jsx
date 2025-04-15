import { useSelector } from "react-redux";
import "./Map.scss";

function Map({
  selectedTime,
  peopleCnt,
  comment,
  date,
  width = 800,
  height = 600,
}) {
  const walls = useSelector((state) => state.reservation.walls);
  const places = useSelector((state) => state.reservation.places);

  const handleClick = () => {};
  let color = "lightblue";
  if (selectedTime && peopleCnt) {
    color = "black";
  }
  const placesCopy = places.map((place) => {
    if (place.reservedTimes.length == 0) {
      return;
    }

    // if (place.peopleCount >= peopleCnt) {
      const filterDatePlace = place.reservedTimes.filter((time) => {
        const reservDate = new Date(time[0]).getDate();
        console.log(time[0])
        // console.log(reservDate, new Date(date).getDate());
        return reservDate === new Date(date).getDate();
      });
    //   console.log(filterDatePlace);
    // }
  });
  return (
    <div className="Map">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ border: "2px solid #ccc", backgroundColor: "#f9f9f9" }}
      >
        {walls.map((wall, i) => (
          <line
            key={`wall-${i}`}
            x1={wall.x1}
            y1={wall.y1}
            x2={wall.x2}
            y2={wall.y2}
            stroke="black"
            strokeWidth="1"
          />
        ))}
        {places.map((item, index) => (
          <rect
            key={index}
            x={item.coord.x}
            y={item.coord.y}
            width={item.coord.width}
            height={item.coord.height}
            // fill={item.coord.color || "lightblue"}
            fill={color}
            stroke="black"
            strokeWidth="2"
            onClick={handleClick}
          />
        ))}
      </svg>
    </div>
  );
}

export default Map;
