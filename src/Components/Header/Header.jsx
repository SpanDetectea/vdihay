import { Link } from "react-router";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../javaScript/firebase";
import { logIn, logOut } from "../../Slices/authSlice";
import { checkAuth } from "../../Slices/checkAuth";

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userName = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch]);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       dispatch(logIn(currentUser));
  //     } else {
  //       dispatch(logOut());
  //     }
  //   });
  //   return () => unsubscribe();
  // }, [dispatch]);
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
        <Link to="/auth">
          <li className="header__ul__li">{isAuth ? userName : "Войти"}</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
