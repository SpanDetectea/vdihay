import { useDispatch, useSelector } from "react-redux";
import "./Map.scss";
import { booking } from "../../../Slices/reservationSlice";
import { useEffect } from "react";
import { formatDateLocal } from "../../../javaScript/formatTime";

function Map({
  selectedTime,
  peopleCnt,
  date,
  orderTime,
  width = 800,
  height = 600,
}) {
  const walls = useSelector((state) => state.reservation.walls);
  const places = useSelector((state) => state.reservation.places);

  const dispatch = useDispatch();
  const handleClick = (id, disabled, choicesDate, choicesDateEnd) => {
    if (!disabled) {
      const bookingObj = {
        id,
        choicesDate: formatDateLocal(choicesDate),
        choicesDateEnd: formatDateLocal(choicesDateEnd),
      };
      dispatch(booking(bookingObj));
    }
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
          let disabled = false;
          let color = "lightblue";
          const choicesDate = new Date(date);
          const choicesDateEnd = new Date(choicesDate);
          if (place.peopleCount >= peopleCnt && peopleCnt) {
            choicesDate.setHours(selectedTime.split(":")[0]);
            choicesDate.setMinutes(selectedTime.split(":")[1]);

            if (orderTime % 1 === 0) {
              choicesDateEnd.setHours(+selectedTime.split(":")[0] + +orderTime);
            } else {
              const hours = Math.floor(orderTime / 1);
              choicesDateEnd.setHours(+selectedTime.split(":")[0] + hours);
              choicesDateEnd.setMinutes(choicesDate.getMinutes() + 30);
            }

            const times = place.reservedTimes.find((time) => {
              const startTime = new Date(time[0]);
              const endTime = new Date(time[1]);
              const returnValues =
                (startTime <= choicesDate && choicesDate < endTime) ||
                (startTime < choicesDateEnd && choicesDateEnd <= endTime);
              return returnValues;
            });
            if (times === undefined) {
              color = "green";
            } else {
              disabled = true;
            }
          } else {
            disabled = true;
          }
          return (
            <rect
              key={index}
              x={place.coord.x}
              y={place.coord.y}
              width={place.coord.width}
              height={place.coord.height}
              fill={color}
              stroke="black"
              strokeWidth="2"
              className="map-place"
              onClick={() =>
                handleClick(place.id, disabled, choicesDate, choicesDateEnd)
              }
            />
          );
        })}
      </svg>
    </div>
  );
}

export default Map;
