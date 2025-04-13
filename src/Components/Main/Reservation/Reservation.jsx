import { useState, useEffect } from "react";
import "./Reservation.scss";
import { getDate } from "../../../javaScript/date";

function Reservation() {
  const {
    firstYear,
    firstMonth,
    firstday,
    secondYear,
    secondMonth,
    secondday,
    curHours,
    curMinutes,
  } = getDate();

  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const todayStr = `${firstYear}-${firstMonth}-${firstday}`;

  const formatTime = (hour, min) =>
    `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;

  const generateTimeSlots = (selectedDate) => {
    const slots = [];
    const now = new Date();
    const selectedDay = new Date(selectedDate);
    const isToday = selectedDate === todayStr;

    // Временные слоты с 11:00 до 23:30
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
      setSelectedTime(""); // сброс выбора
    }
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="reservation">
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

        {date && (
          <div className="reservation__form__slots">
            <p>Выберите время:</p>
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
