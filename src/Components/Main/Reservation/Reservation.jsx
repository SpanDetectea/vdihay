import {  useState } from "react";
import "./Reservation.scss";
import { getDate} from "../../../javaScript/date";

function Reservation() {
  let {firstYear, firstMonth, firstday, secondYear, secondMonth, secondday, curHours, curMinutes} = getDate()
  const [date, setDate] = useState("");
  const [firstTime, setFirstTime] = useState(`${curHours}:${curMinutes}`);
  const handleDate = (e) => {
    setDate(e.target.value);
    // getTime(e.target.value)
  };
  return (
    <div className="reservation">
      <form action="" className="reservation__form">
        <div className="reservation__form__date">
          <input
            type="date"
            className={`reservation__form__date-input reservation__form-input ${
              date != "" ? "has-value" : ""
            }`}
            placeholder="Выберите день"
            onChange={handleDate}
            value={date}
            min={`${firstYear}-${firstMonth}-${firstday}`}
            max={`${secondYear}-${secondMonth}-${secondday}`}
          />
          <input
            type="time"
            className="reservation__form__date-input reservation__form-input"
            placeholder="Выберите начало"
            // min={firstTime}
            // max={firstTime}
            // value={firstTime}
            onChange={(e) => console.log(e.target.value)}
          />
          <input
            type="time"
            className="reservation__form__date-input reservation__form-input"
          />
        </div>

        <input
          type="number"
          className="reservation__form-input"
          placeholder="Количество человек"
        />
        <input
          type="text"
          className="reservation__form-input"
          placeholder="Комментарии"
        />
      </form>
    </div>
  );
}

export default Reservation;
