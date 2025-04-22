function PlaceRect({ place, start, end, peopleCnt, onClick, curPlace, delta }) {
  const isParamsSelected = start && end && peopleCnt;
  const meetsPeopleRequirement = peopleCnt && place.peopleCount >= peopleCnt;

  const isTimeAvailable = (reservedTimes, start, end) => {
    return !reservedTimes.some(([reservedStart, reservedEnd]) => {
      const resStart = new Date(reservedStart);
      const resEnd = new Date(reservedEnd);
      return start < resEnd && resStart < end;
    });
  };
  const available =
    isParamsSelected &&
    meetsPeopleRequirement &&
    isTimeAvailable(place.reservedTimes, start, end);

  let color = "lightblue";
  if (isParamsSelected && !available) {
    color = "red";
  }
  const { x, y, width, height } = place.coord;

  const handleClick = () => {
    if (available && start && end) {
      onClick(place.id);
    }
  };
  return (
    <rect
      x={x*delta}
      y={y*delta}
      width={width*delta}
      height={height*delta}
      fill={curPlace === place.id ? "#00f0ff" : color}
      stroke="black"
      strokeWidth="2"
      className={!available ? "map-place map-place-disable" : "map-place"}
      onClick={handleClick}
    />
  );
}

export default PlaceRect;
