import { useDispatch, useSelector } from "react-redux";
import "./Map.scss";
import { booking } from "../../../Slices/reservationSlice";
import { formatDateLocal } from "../../../javaScript/formatTime";
import PlaceRect from "./PlaceRect";

function Map({ selectedTime, peopleCnt, date, orderTime, width = 800, height = 600 }) {
  const walls = useSelector((state) => state.reservation.walls);
  const places = useSelector((state) => state.reservation.places);
  const dispatch = useDispatch();

  const handleClick = (id, available, start, end) => {
    if (!available) {
      dispatch(
        booking({
          id,
          choicesDate: formatDateLocal(start),
          choicesDateEnd: formatDateLocal(end),
        })
      );
    }
  };

  const calculateBookingTime = (baseDate, selectedTime, orderTime) => {
    const [hourStr, minuteStr] = selectedTime.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    const start = new Date(baseDate);
    start.setHours(hour, minute, 0, 0);

    const end = new Date(start);
    const fullHours = Math.floor(orderTime);
    const extraMinutes = (orderTime % 1) * 60;

    end.setHours(end.getHours() + fullHours);
    end.setMinutes(end.getMinutes() + extraMinutes);

    return [start, end];
  };

  return (
    <div className="map">
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

        {places.map((place, index) => {
          const [start, end] = calculateBookingTime(date, selectedTime, orderTime);
          return (
            <PlaceRect
              key={index}
              place={place}
              start={start}
              end={end}
              peopleCnt={peopleCnt}
              onClick={handleClick}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default Map;
