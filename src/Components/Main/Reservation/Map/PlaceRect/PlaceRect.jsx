import { isTimeAvailable } from "../../../../../javaScript/formatTime";

function PlaceRect({ place, start, end, peopleCnt, onClick, curPlace, delta }) {
  const isParamsSelected = start && end && peopleCnt;
  const meetsPeopleRequirement = peopleCnt && place.peopleCount >= peopleCnt;

  const available =
    isParamsSelected &&
    meetsPeopleRequirement &&
    isTimeAvailable(place.reservedTimes, start, end);

  const getColor = () => {
    if (curPlace === place.id) return "#00f0ff";
    if (isParamsSelected && !available) return "red";
    return "lightblue";
  };
  const { x, y, width, height } = place.coord;

  const handleClick = () => {
    if (available) {
      onClick(place.id);
    }
  };
  return (
    <rect
      x={x * delta}
      y={y * delta}
      width={width * delta}
      height={height * delta}
      fill={getColor()}
      stroke="black"
      strokeWidth="2"
      className={!available ? "map-place map-place-disable" : "map-place"}
      onClick={handleClick}
    />
  );
}

export default PlaceRect;
