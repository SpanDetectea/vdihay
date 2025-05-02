import { useEffect } from "react";
import "./Main.scss";
import Reservation from "./Reservation/Reservation";

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <h1 className="main__h">Vdihay</h1>
      <div className="main__title">ОНЛАЙН-БРОНИРОВАНИЕ</div>
      <div className="main__description">
        Забронируйте столик в нашем заведении
      </div>
      <div className="main__reserv">
        <Reservation />
      </div>
    </div>
  );
}

export default Main;
