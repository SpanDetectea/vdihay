import "./Admin.scss";
import { useState } from "react";
import { getDate } from "../../javaScript/date";
import Container from "./Container/Container";
import { formatDateLocal } from "../../javaScript/formatTime";
function Admin() {
  const [date, setDate] = useState("");
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const {
    firstYear,
    firstMonth,
    firstday,
    secondYear,
    secondMonth,
    secondday,
  } = getDate();
  return (
    <div className="admin">
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
      <Container choiseDate = {date}/>
    </div>
  );
}

export default Admin;
