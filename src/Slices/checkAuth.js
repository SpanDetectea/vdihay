import { onAuthStateChanged } from "firebase/auth";
import { logIn, logOut, setLoading } from "./authSlice";
import { auth } from "../javaScript/firebase";

export const checkAuth = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          logIn({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logOut());
      }
      dispatch(setLoading(false));
    });

    return unsubscribe;
  } catch (error) {
    console.error("Ошибка подписки на onAuthStateChanged", error);
    dispatch(logOut());
    dispatch(setLoading(false));
  }
};
