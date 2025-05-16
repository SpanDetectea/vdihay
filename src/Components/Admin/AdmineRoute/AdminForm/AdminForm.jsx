import { useDispatch } from "react-redux";
import Button from "../../../common/Button/Button";
import { formatDateLocal } from "../../../../javaScript/formatTime";
import { booking } from "../../../../Slices/reservationSlice";
import "./AdminForm.scss";

function AdminForm({
  placeId,
  handleClose,
  formData,
  date,
  setFormDate,
  setIsAdd,
}) {
  const dispatch = useDispatch();
  const handleName = (e) =>
    setFormDate((prev) => ({ ...prev, name: e.target.value }));
  const handlePhone = (e) =>
    setFormDate((prev) => ({ ...prev, phone: e.target.value }));
  const handleStartTime = (e) =>
    setFormDate((prev) => ({ ...prev, startTime: e.target.value }));
  const handleEndTime = (e) =>
    setFormDate((prev) => ({ ...prev, endTime: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.phone &&
      formData.startTime &&
      formData.endTime
    ) {
      const start = new Date(date);
      const startSplit = formData.startTime.split(":");
      start.setHours(+startSplit[0], +startSplit[1], 0, 0);
      
      if (start.getHours() <= 10) {
        start.setDate(start.getDate()+1)
      }
        const end = new Date(start);
        // const end = new Date(date);
      const endSplit = formData.endTime.split(":");
      end.setHours(+endSplit[0], +endSplit[1], 0, 0);
      // if (+end.getHours() < 5) {
      //   end.setDate(end.getDate() + 1);
      // }
      const newObj = {
        id: placeId,
        choicesDate: formatDateLocal(start),
        choicesDateEnd: formatDateLocal(end),
        name: formData.name,
        phone: formData.phone,
      };
      dispatch(booking(newObj));
      setIsAdd(false);
      setFormDate({
        name: "",
        phone: "",
        startTime: "",
        endTime: "",
      });
    }
  };
  return (
    <>
      <div className="admin-place">Номер вашего стола {placeId}</div>
      <form className="admin__form">
        <input
          type="text"
          placeholder="Имя"
          className="input"
          maxLength={30}
          onInput={handleName}
          value={formData.name}
        />
        <input
          type="text"
          placeholder="Телефон"
          className="input"
          onInput={handlePhone}
          value={formData.phone}
          maxLength={12}
        />
        <input
          type="time"
          onChange={handleStartTime}
          value={formData.startTime}
          className="admin-time"
        />
        <input
          type="time"
          onChange={handleEndTime}
          value={formData.endTime}
          className="admin-time"
        />
        <Button text="Забронировать" onClick={handleSubmit} />
        <Button text="Закрыть" onClick={handleClose} />
      </form>
    </>
  );
}

export default AdminForm;
