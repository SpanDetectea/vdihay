import { useEffect, useState } from "react";
import "./Auth.scss";
import LogoutButton from "./LogoutButton/LogoutButton";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { formatTimeRange } from "../../javaScript/formatTime";
import { unReserve } from "../../Slices/reservationSlice";
import { deleteReserv } from "../../Slices/authSlice";

function Auth() {
  const [isAccount, setIsAccount] = useState(true);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const myReserv = useSelector((state) => state.auth.reserv);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (item) => {
    const table = item.table;
    const times = item.times;
    dispatch(
      unReserve({
        table,
        times,
      })
    );
    dispatch(
      deleteReserv({
        table,
        times,
      })
    );
  };

  return (
    <div className="auth">
      {isAuth ? (
        <div className="auth__profile">
          <h1 className="auth__profile-header">
            Добро пожаловать, {user.name ? user.name : "Гость"}
          </h1>
          {myReserv.length >= 1 && (
            <div>
              <p className="auth__profile-title">Активные брони:</p>
              <ul className="auth__profile-ul">
                {myReserv.map((item, index) => (
                  <li
                    key={index}
                    className="auth__profile-ul-li"
                   
                  >
                    {formatTimeRange(item.times)}
                    <button class="auth__profile-ul-li-close"  onClick={() => handleClick(item)}>&times;</button>
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
          )}

          <LogoutButton />
        </div>
      ) : (
        <div>
          {isAccount ? (
            <div className="auth__signin">
              <SignIn />
              <div onClick={() => setIsAccount(!isAccount)} className="auth__signin-acc">
                У меня нет аккаунта
              </div>
            </div>
          ) : (
            <div className="auth__signup">
              <SignUp />
              <div onClick={() => setIsAccount(!isAccount)} className="auth__signup-acc">
                У меня уже есть аккаунт
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Auth;
