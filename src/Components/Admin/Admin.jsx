import "./Admin.scss";
import { useState } from "react";
import { getDate, sortReservedTimesByStart } from "../../javaScript/date";
import Container from "./Container/Container";
import { useSelector } from "react-redux";
import AdminRemoveList from "./AdmineRoute/AdminRemoveList/AdminRemoveList";
import AdminForm from "./AdmineRoute/AdminForm/AdminForm";
import ChoseDate from "../common/ChoseDate/ChoseDate";
function Admin() {
  const [date, setDate] = useState("");
  const [formData, setFormDate] = useState({
    name: "",
    phone: "",
    startTime: "",
    endTime: "",
  });
  const [isAdd, setIsAdd] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const [placeId, setPlaceId] = useState("");
  const sortPlaces = useSelector((state) => state.reservation.places);
  const places = sortReservedTimesByStart(sortPlaces);
  const handleAddReserv = (id) => {
    setIsRemove(false);
    date && setIsAdd(true);
    setPlaceId(id);
  };
  const handleRemoveReserv = (id) => {
    setIsAdd(false);
    date && setIsRemove(true);
    setPlaceId(id);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleClose = () => {
    setIsAdd(false);
    setIsRemove(false);
    setFormDate({
      name: "",
      phone: "",
      startTime: "",
      endTime: "",
    });
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
      <ChoseDate handleDateChange={handleDateChange} date={date}/>
      <Container
        choiseDate={date}
        handleAddReserv={handleAddReserv}
        handleRemoveReserv={handleRemoveReserv}
        places={places}
      />
      {isAdd && <AdminForm handleClose={handleClose} placeId={placeId} formData={formData} date={date} setFormDate={setFormDate} setIsAdd={setIsAdd}/>}
      {isRemove && places[placeId - 1].reservedTimes.length && (
        <AdminRemoveList handleClose={handleClose} placeId={placeId} />
      )}
    </div>
  );
}

export default Admin;
