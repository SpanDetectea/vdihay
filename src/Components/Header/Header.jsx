import { Link } from "react-router";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../../Slices/checkAuth";

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userName = useSelector((state) => state.auth.user.name);
  const isAdmin = useSelector(state => state.auth.user.role)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch]);
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
        <Link to="/auth">
          <li className="header__ul__li">{isAuth ? userName : "Войти"}</li>
        </Link>
        {isAdmin === "admin" ? <Link to="/admin">
          <li className="header__ul__li">Админка</li>
        </Link> : null}
      </ul>
    </div>
  );
}

export default Header;
