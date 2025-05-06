import "./Container.scss";
import {
  formatTimeRange,
  reservationOfTheDay,
} from "../../../javaScript/formatTime";
import { getStartEndPoints } from "../../../javaScript/date";

function Container({
  choiseDate,
  handleAddReserv,
  places,
  handleRemoveReserv,
}) {
  const { startPoint, endPoint } = getStartEndPoints(choiseDate);
  return (
    <div className="container">
      {places.map((place) => {
        const cn = `div${place.id} div`;

        return (
          <div className={cn} key={place.id}>
            <div className="container-placeNumber">
              Стол номер {place.id} ({place.peopleCount})
            </div>

            {place.reservedTimes.map((time, index) => {
              const response = reservationOfTheDay(
                time.times,
                startPoint,
                endPoint
              );
              return response ? (
                <div key={index} className="container-time">
                  {formatTimeRange(time.times, false)} {time.name}
                </div>
              ) : null;
            })}
            <button
              className="container-button container-button-add"
              onClick={() => handleAddReserv(place.id)}
            >
              Добавить
            </button>
            <button
              className="container-button container-button-remove"
              onClick={() => handleRemoveReserv(place.id)}
            >
              Удалить
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Container;
