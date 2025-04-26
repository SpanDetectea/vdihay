import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../Slices/reservationSlice";
import authReducer from "../Slices/authSlice";
export default configureStore({
  reducer: {
    reservation: reservationReducer,
    auth: authReducer,
  },
});
