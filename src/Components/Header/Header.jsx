import { Link } from "react-router";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <ul className="header__ul">
        <Link to="/">
          <li className="header__ul__li">Домашнаяя</li>
        </Link>
        <Link to="/menu">
          <li className="header__ul__li">Меню</li>
        </Link>
        <Link to="/about">
          <li className="header__ul__li">О нас</li>
        </Link>
        <Link to="/contacts">
          <li className="header__ul__li">Контакты</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
