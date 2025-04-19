import { useState, useEffect } from "react";
import "./Reservation.scss";
import { getDate } from "../../../javaScript/date";
import Map from "../Map/Map";
import { formatTime } from "../../../javaScript/formatTime";
import { useSelector } from "react-redux";

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

  const todayStr = `${firstYear}-${firstMonth}-${firstday}`;

  const generateTimeSlots = (selectedDate) => {
    const slots = [];
    const now = new Date();
    const selectedDay = new Date(selectedDate);
    const isToday = selectedDate === todayStr;

    // Временные слоты с 11:00 до 23:45
    for (let hour = 11; hour < 24; hour++) {
      for (let min = 0; min < 60; min += 15) {
        const slot = new Date(selectedDay);
        slot.setHours(hour, min, 0, 0);
        const disabled = isToday && slot < now;
        if (!disabled) {
          slots.push({ time: formatTime(hour, min), disabled });
        }
      }
    }

    // Временные слоты с 00:00 до 02:30 следующего дня
    const nextDay = new Date(selectedDay);
    nextDay.setDate(nextDay.getDate() + 1);
    for (let hour = 0; hour < 3; hour++) {
      for (let min = 0; min < 60; min += 15) {
        const slot = new Date(nextDay);
        slot.setHours(hour, min, 0, 0);
        const disabled = isToday && slot < now;
        slots.push({ time: formatTime(hour, min), disabled });
      }
    }
    return slots;
  };

  useEffect(() => {
    if (date) {
      const slots = generateTimeSlots(date);
      setTimeSlots(slots);
      setSelectedTime("");
    }
  }, [date]);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);
  const handlePeopleCntChange = (e) => setPeopleCnt(e.target.value);
  const handleOrderTime = (e) => setOrderTime(e.target.value);

  return (
    <div className="reservation">
      <Map
        selectedTime={selectedTime}
        peopleCnt={peopleCnt}
        date={date}
        orderTime={orderTime}
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
            Сколько планируете посидеть
            <select
              className="time-select"
              value={orderTime}
              onChange={handleOrderTime}
              disabled={timeSlots.length === 0}
            >
              <option value="">{orderTimeDuration[0]}</option>
              {orderTimeDuration
                .filter((item, index) => index != 0)
                .map((time) => (
                  <option>{time}</option>
                ))}
            </select>
          </div>
        )}
      </form>
    </div>
  );
}

export default Reservation;
