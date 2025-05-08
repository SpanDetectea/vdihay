import { useState, useEffect } from "react";
import "./Reservation.scss";
import { generateTimeSlots, getDate } from "../../../javaScript/date";
import {
  calculateBookingTime,
  formatDateLocal,
  initialDate,
} from "../../../javaScript/formatTime";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button/Button";
import { booking } from "../../../Slices/reservationSlice";
import { useLocation, useNavigate } from "react-router";
import { addReserv } from "../../../Slices/authSlice";
import Map from "./Map/Map";
import Slots from "./Slots/Slots";
import ChoseDate from "../../common/ChoseDate/ChoseDate";

function Reservation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
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
  const isAuth = useSelector((state) => state.auth.isAuth);
  const myReserv = useSelector((state) => state.auth.reserv);
  const user = useSelector(state => state.auth.user)
  const [date, setDate] = useState(initialDate(new Date()));
  const [selectedTime, setSelectedTime] = useState("");
  const [orderTime, setOrderTime] = useState(orderTimeDuration[0]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [peopleCnt, setPeopleCnt] = useState("");
  const [curPlace, setCurPlace] = useState(undefined);

  useEffect(() => {
    if (date) {
      const slots = generateTimeSlots(date, firstYear, firstMonth, firstday);
      setTimeSlots(slots);
      setSelectedTime("");
    }
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setCurPlace(undefined);
  };
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setCurPlace(undefined);
  };
  const handlePeopleCntChange = (e) => {
    const value = Math.floor(e.target.value);
    const validateValue = value < 1 ? "" : value;
    setPeopleCnt(validateValue);
    setCurPlace(undefined);
  };
  const handleOrderTime = (e) => {
    setOrderTime(e.target.value);
    setCurPlace(undefined);
  };
  const handleClickButton = (e) => {
    e.preventDefault();
    if (isAuth) {
      if (myReserv.length < 2) {
        dispatch(
          booking({
            id: curPlace,
            choicesDate: formatDateLocal(start),
            choicesDateEnd: formatDateLocal(end),
            name: user.name ? user.name : "Гость",
            phone: "phone",
          })
        );
        const newObj = {
          times: [formatDateLocal(start), formatDateLocal(end)],
          table: curPlace,
        };
        dispatch(addReserv(newObj));
        setCurPlace(undefined);
      }
    } else {
      navigate("/auth", { state: { from: location.pathname } });
    }
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
        {myReserv.length >= 2 && (
          <p className="reservation__form-p">
            У вас не может быть больше 2-ух активных броней!
          </p>
        )}
        <ChoseDate handleDateChange={handleDateChange} date={date}/>
        <input
          type="number"
          className="input"
          placeholder="Количество человек"
          value={peopleCnt}
          onInput={handlePeopleCntChange}
        />
        {date && peopleCnt && (
          <Slots
            selectedTime={selectedTime}
            handleTimeChange={handleTimeChange}
            timeSlots={timeSlots}
          />
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
        {date && peopleCnt && orderTime && !curPlace && <p className="reservation__form-placeholder"> {"⇦"}Выберите стол</p>}
        {curPlace && (
          <div className="reservation__form__info">
            <p className="reservation__form__info-paragraph">
              Столик на {peopleCnt} человек {date} с {selectedTime} на{" "}
              {orderTime} часа
            </p>
            <Button onClick={handleClickButton} text="Забронировать" />
          </div>
        )}
      </form>
    </div>
  );
}

export default Reservation;
