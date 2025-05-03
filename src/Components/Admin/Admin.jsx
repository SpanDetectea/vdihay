import "./Admin.scss";
import { useState } from "react";
import { getDate, sortReservedTimesByStart } from "../../javaScript/date";
import Container from "./Container/Container";
import Button from "../common/Button/Button";
import {
  formatDateLocal,
} from "../../javaScript/formatTime";
import { booking } from "../../Slices/reservationSlice";
import { useDispatch, useSelector } from "react-redux";
function Admin() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [placeId, setPlaceId] = useState("");
  const sortPlaces = useSelector((state) => state.reservation.places);
  const places = sortReservedTimesByStart(sortPlaces);
  const dispatch = useDispatch();
  const handleAddReserv = (id) => {
    date && setIsAdd(true);
    setPlaceId(id);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleName = (e) => setName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleStartTime = (e) => setStartTime(e.target.value);
  const handleEndTime = (e) => setEndTime(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const start = new Date(date);
    const startSplit = startTime.split(":");
    start.setHours(+startSplit[0], +startSplit[1], 0, 0);
    const end = new Date(date);
    const endSplit = endTime.split(":");
    end.setHours(+endSplit[0], +endSplit[1], 0, 0);
    if (+end.getHours() < 5) {
      end.setDate(end.getDate()+1)
    }
    const newObj = {
      id: placeId,
      choicesDate: formatDateLocal(start),
      choicesDateEnd: formatDateLocal(end),
      name: name,
      phone: phone,
    };
    dispatch(booking(newObj));
    setIsAdd(false)
  };
  const handleClose = () => setIsAdd(false)
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
      <Container choiseDate={date} handleAddReserv={handleAddReserv} places={places}/>
      {isAdd && (
      <>
        <div className="admin-place">Номер вашего стола {placeId}</div>
        <form className="admin__form">
          <input
            type="text"
            placeholder="Имя"
            className="input"
            onInput={handleName}
            value={name}
          />
          <input
            type="text"
            placeholder="Телефон"
            className="input"
            onInput={handlePhone}
            value={phone}
          />
          <input
            type="time"
            onChange={handleStartTime}
            value={startTime}
            className="admin-time"
          />
          <input
            type="time"
            onChange={handleEndTime}
            value={endTime}
            className="admin-time"
          />
          <Button text="Забронировать" onClick={handleSubmit} />
          <Button text="Закрыть" onClick={handleClose} />
        </form>
      </>
      )}
      <div>
        {places.filter(place => place.id === placeId).map(place => place.reservedTimes.map(times => {
          <div>{times}</div>
        }))}
      </div>
    </div>
  );
}

export default Admin;
