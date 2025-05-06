import "./Slots.scss";
function Slots({timeSlots, handleTimeChange, selectedTime}) {
  return (
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
  );
}

export default Slots;
