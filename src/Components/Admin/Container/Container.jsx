import { useSelector } from "react-redux";
import "./Container.scss";
import {
  formatDateLocal,
  formatTimeRange,
  isTimeAvailable,
} from "../../../javaScript/formatTime";
function Container({ choiseDate }) {
  const places = useSelector((state) => state.reservation.places);
  return (
    <div className="container">
      {places.map((place) => {
        const cn = `div${place.id} div`;

        return (
          <div className={cn} key={place.id}>
            {place.id}
            {place.reservedTimes.map((time, index) => {
              if (choiseDate) {
                const endDayDate = new Date(time[1]); // Дата начала брони full
                const curDate = new Date(); // Текущая дата full
                const choiceDayDate = new Date(choiseDate); // дата выбранного дня
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
                const response = isTimeAvailable(time, startPoint, endPoint)
                console.log(response)
                // if (startPoint <= endDayDate && endDayDate < endPoint)
              }

              return <div key={index}>{formatTimeRange(time)}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Container;
