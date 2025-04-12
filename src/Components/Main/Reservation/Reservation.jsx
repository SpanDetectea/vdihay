import { useState } from "react";
import "./Reservation.scss";

function Reservation() {
    const [date, setDate] = useState("")
    const handleDate = (e) => {
        setDate(e.target.value)
    }
  return (
    <div className="reservation">
      <form action="" className="reservation__form">
        <div className="reservation__form__date">
          <input type="date" className={`reservation__form__date-input reservation__form-input ${date != '' ? 'has-value': ''}`} placeholder="Выберите день" onChange={handleDate} value={date}/>
          <input type="time" className="reservation__form__date-input reservation__form-input" />
          <input type="time" className="reservation__form__date-input reservation__form-input" />
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
