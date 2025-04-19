import { useSelector } from "react-redux";
import "./Map.scss";

function Map({ selectedTime, peopleCnt, date, orderTime, width = 800, height = 600 }) {
  const walls = useSelector((state) => state.reservation.walls);
  const places = useSelector((state) => state.reservation.places);
  const handleClick = (place) => {
    console.log(place);
  };


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
        {places.map((place, index) => {
          let color = "lightblue";
          if (place.peopleCount >= peopleCnt && peopleCnt) {
            const choicesDate = new Date(date);
            choicesDate.setHours(selectedTime.split(":")[0]);
            choicesDate.setMinutes(selectedTime.split(":")[1]);
 
            const choicesDateEnd = new Date(choicesDate);
            
            if (orderTime % 1 === 0) {
              choicesDateEnd.setHours(+selectedTime.split(":")[0]+orderTime)
            } else {
              choicesDateEnd.setHours(+selectedTime.split(":")[0]+orderTime)
              choicesDateEnd.setMinutes(choicesDate.getMinutes()+30)
            }
            // console.log(choicesDateEnd)

            const times = place.reservedTimes.find((time) => {
              const startTime = new Date(time[0]);
              const endTime = new Date(time[1]);
              const returnValues =
                startTime <= choicesDate && choicesDate <= endTime;
              return returnValues;
            });
            if (times === undefined) {
              color = "green";
            } 
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
              // onClick={() => handleClick(place)}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default Map;
