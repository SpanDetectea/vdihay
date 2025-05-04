import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../Slices/reservationSlice";
import authReducer from "../Slices/authSlice";
import { loadState, saveState } from "../javaScript/localStorage";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    auth: authReducer,
  },
  preloadedState
});

store.subscribe(() => {
  saveState(store.getState());
})
export default store