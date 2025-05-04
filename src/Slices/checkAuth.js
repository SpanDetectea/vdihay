import { onAuthStateChanged } from "firebase/auth";
import { logIn, logOut, setLoading } from "./authSlice";
import { auth, db } from "../javaScript/firebase";
import { doc, getDoc } from "firebase/firestore";

export const checkAuth = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        let role = "user";
        if (userSnap.exists()) {
          role = userSnap.data().role || "user"; 
        }
        dispatch(
          logIn({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            role,
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
