function PlaceRect({ place, start, end, peopleCnt, onClick }) {
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
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      stroke="black"
      strokeWidth="2"
      className={!available ? "map-place map-place-disable" : "map-place"}
      onClick={() => onClick(place.id, !available, start, end)}
    />
  );
}

export default PlaceRect;
