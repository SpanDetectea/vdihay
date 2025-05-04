import "./Container.scss";
import {
  formatTimeRange,
  reservationOfTheDay,
} from "../../../javaScript/formatTime";

function Container({ choiseDate, handleAddReserv, places, handleRemoveReserv}) {

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
              const curDate = new Date();
              const choiceDayDate = new Date(choiseDate);
              const endPoint = new Date(choiseDate);
              const startPoint = new Date(choiseDate);

              endPoint.setDate(endPoint.getDate() + 1);
              endPoint.setHours(11, 0, 0, 0);
              if (choiceDayDate.getDate() === curDate.getDate()) {
                startPoint.setHours(
                  curDate.getHours(),
                  curDate.getMinutes(),
                  0,
                  0
                );
              } else {
                startPoint.setHours(11, 0, 0, 0);
              }
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
              onClick={() =>handleAddReserv(place.id)}
            >
              Добавить
            </button>
            <button className="container-button container-button-remove"
              onClick={() =>handleRemoveReserv(place.id)}>
              Удалить
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Container;
