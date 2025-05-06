import { useDispatch, useSelector } from "react-redux";
import { sortReservedTimesByStart } from "../../../../javaScript/date";
import { formatTimeRange } from "../../../../javaScript/formatTime";
import Button from "../../../common/Button/Button";
import { unReserve } from "../../../../Slices/reservationSlice";
import "./AdminRemoveList.scss"

function AdminRemoveList({handleClose, placeId}) {
    const sortPlaces = useSelector((state) => state.reservation.places);
    const places = sortReservedTimesByStart(sortPlaces);
    const dispatch = useDispatch();
    const handleClickRemove = (times) => {
        const obj = {
          table: placeId,
          times: times,
        };
        dispatch(unReserve(obj));
      };
    return ( <div className="admin__reservs">
        <ul className="auth__profile-ul admin-profile">
          {places
            .filter((place) => place.id === placeId)
            .map((place) =>
              place.reservedTimes.map((time) => {
                const { name, phone, times } = time;
                return (
                  <li key={phone} className="auth__profile-ul-li">
                    <span>
                      {formatTimeRange(times, false)} {name}
                    </span>
                    <button
                      className="auth__profile-ul-li-close"
                      onClick={() => handleClickRemove(times)}
                    >
                      &times;
                    </button>
                  </li>
                );
              })
            )}
        </ul>
        <Button text="Закрыть" onClick={handleClose} />
      </div>  );
}

export default AdminRemoveList;