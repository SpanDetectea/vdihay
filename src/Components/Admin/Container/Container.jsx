import { useSelector } from "react-redux";
import "./Container.scss";
import {
  formatTimeRange,
  reservationOfTheDay,
} from "../../../javaScript/formatTime";
function Container({ choiseDate }) {
  const places = useSelector((state) => state.reservation.places);
  return (
    <div className="container">
      {places.map((place) => {
        const cn = `div${place.id} div`;

        return (
          <div className={cn} key={place.id}>
            <div className="container-placeNumber">Стол номер {place.id} ({place.peopleCount})</div>
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
              const response = reservationOfTheDay(time, startPoint, endPoint);

              return response ? <div key={index}>{formatTimeRange(time)}</div> : null;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Container;
