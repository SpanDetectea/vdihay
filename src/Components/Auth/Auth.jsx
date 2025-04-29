import { useEffect, useState } from "react";
import "./Auth.scss";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../javaScript/firebase";
import LogoutButton from "./LogoutButton/LogoutButton";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../../Slices/authSlice";

function Auth() {
  const [isAccount, setIsAccount] = useState(true);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

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
    <div className="auth">
      {isAuth ? (
        <div>
          <h1>Добро пожаловать, {user.name ? user.name : "Гость"}</h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          {isAccount ? (
            <div>
              <SignIn />
              <div onClick={() => setIsAccount(!isAccount)}>У меня нет аккаунта</div>
            </div>
          ) : (
            <div>
              <SignUp />
              <div onClick={() => setIsAccount(!isAccount)}>
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
