import { useState, useEffect } from "react";
import "./Reservation.scss";
import { generateTimeSlots, getDate } from "../../../javaScript/date";
import Map from "../Map/Map";
import {
  calculateBookingTime,
  formatDateLocal,
  formatTime,
} from "../../../javaScript/formatTime";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button/Button";
import { booking } from "../../../Slices/reservationSlice";

function Reservation() {
  const {
    firstYear,
    firstMonth,
    firstday,
    secondYear,
    secondMonth,
    secondday,
  } = getDate();

  const orderTimeDuration = useSelector(
    (state) => state.reservation.orderTimeDuration
  );
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [orderTime, setOrderTime] = useState(orderTimeDuration[0]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [peopleCnt, setPeopleCnt] = useState("");
  const [curPlace, setCurPlace] = useState(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    if (date) {
      const slots = generateTimeSlots(date, firstYear, firstMonth, firstday);
      setTimeSlots(slots);
      setSelectedTime("");
    }
  }, [date]);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);
  const handlePeopleCntChange = (e) => {
    const value = Math.floor(e.target.value);
    const validateValue = value < 1 ? "" : value;
    setPeopleCnt(validateValue);
  };
  const handleOrderTime = (e) => setOrderTime(e.target.value);
  const handleClickButton = (e) => {
    e.preventDefault();
    dispatch(
      booking({
        id: curPlace,
        choicesDate: formatDateLocal(start),
        choicesDateEnd: formatDateLocal(end),
      })
    );
    setCurPlace(undefined);
  };

  const [start, end] =
    date &&
    selectedTime &&
    orderTime &&
    calculateBookingTime(date, selectedTime, orderTime);

  return (
    <div className="reservation">
      <Map
        start={start}
        end={end}
        peopleCnt={peopleCnt}
        curPlace={curPlace}
        setCurPlace={setCurPlace}
      />
      <form className="reservation__form">
        <div className="reservation__form__date">
          <input
            type="date"
            className={`reservation__form__date-input reservation__form-input ${
              date !== "" ? "has-value" : ""
            }`}
            onChange={handleDateChange}
            value={date}
            min={`${firstYear}-${firstMonth}-${firstday}`}
            max={`${secondYear}-${secondMonth}-${secondday}`}
          />
        </div>
        <input
          type="number"
          className="reservation__form-input"
          placeholder="Количество человек"
          value={peopleCnt}
          onInput={handlePeopleCntChange}
        />
        {date && peopleCnt && (
          <div className="reservation__form__slots">
            <select
              className="time-select"
              value={selectedTime}
              onChange={handleTimeChange}
              disabled={timeSlots.length === 0}
            >
              <option value="" disabled>
                Выберите время
              </option>
              {timeSlots.map(({ time, disabled }) => (
                <option key={time} value={time} disabled={disabled}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        )}
        {date && peopleCnt && (
          <div className="reservation__form__slots">
            <p>Продолжительность брони (часы)</p>
            <select
              className="time-select"
              value={orderTime}
              onChange={handleOrderTime}
              disabled={timeSlots.length === 0}
            >
              {orderTimeDuration.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
            </select>
          </div>
        )}
        {curPlace && (
          <div className="reservation__form__info">
            <p className="reservation__form__info-paragraph">
              Столик на {peopleCnt} человек {date} с {selectedTime} по{" "}
              {orderTime}
              часа
            </p>
            <Button onClick={handleClickButton}/>
          </div>
        )}
      </form>
    </div>
  );
}

export default Reservation;
