import { getDate } from "../../../javaScript/date";
import "./ChoseDate.scss";

function ChoseDate({handleDateChange, date}) {
      const {
        firstYear,
        firstMonth,
        firstday,
        secondYear,
        secondMonth,
        secondday,
      } = getDate();
  return (
    <div className="reservation__form__date">
      <input
        type="date"
        className={`reservation__form__date-input input ${
          date !== "" ? "has-value" : ""
        }`}
        onChange={handleDateChange}
        value={date}
        min={`${firstYear}-${firstMonth}-${firstday}`}
        max={`${secondYear}-${secondMonth}-${secondday}`}
      />
    </div>
  );
}

export default ChoseDate;
