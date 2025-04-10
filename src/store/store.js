import { configureStore } from '@reduxjs/toolkit'
import reservationReducer from '../Slices/reservationSlice'
export default configureStore({
  reducer: {
    reservation: reservationReducer
  },
})