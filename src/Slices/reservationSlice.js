import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  places: [
    {
      id: 1,
      peopleCount: 4,
      reservedTimes: [
        ["2025-04-20T17:30:00", "2025-04-20T19:00:00"],
        ["2025-05-03T21:00:00", "2025-05-03T23:00:00"],
        ["2025-05-03T11:00:00", "2025-05-03T12:30:00"],
      ],
      isVip: false,
      coord: { x: 20, y: 420, width: 60, height: 60 },
    },
    {
      id: 2,
      peopleCount: 6,
      reservedTimes: [["2025-04-21T18:00:00", "2025-04-21T22:00:00"]],
      isVip: false,
      coord: { x: 110, y: 420, width: 60, height: 60 },
    },
    {
      id: 3,
      peopleCount: 3,
      reservedTimes: [
        ["2025-04-22T17:00:00", "2025-04-22T20:00:00"],
        ["2025-05-03T17:00:00", "2025-05-03T20:00:00"],
        ["2025-05-03T17:00:00", "2025-05-03T20:00:00"],
      ],
      isVip: false,
      coord: { x: 20, y: 340, width: 60, height: 60 },
    },
    {
      id: 4,
      peopleCount: 5,
      reservedTimes: [["2025-04-22T19:00:00", "2025-04-22T23:00:00"]],
      isVip: false,
      coord: { x: 110, y: 340, width: 60, height: 60 },
    },
    {
      id: 5,
      peopleCount: 2,
      reservedTimes: [["2025-04-20T18:00:00", "2025-04-20T21:00:00"]],
      isVip: false,
      coord: { x: 20, y: 260, width: 60, height: 60 },
    },
    {
      id: 6,
      peopleCount: 7,
      reservedTimes: [["2025-04-21T19:00:00", "2025-04-21T22:00:00"]],
      isVip: false,
      coord: { x: 110, y: 260, width: 60, height: 60 },
    },
    {
      id: 7,
      peopleCount: 4,
      reservedTimes: [["2025-04-22T18:00:00", "2025-04-22T22:30:00"]],
      isVip: true,
      coord: { x: 250, y: 20, width: 60, height: 60 },
    },
    {
      id: 8,
      peopleCount: 7,
      reservedTimes: [["2025-04-21T17:00:00", "2025-04-21T20:00:00"]],
      isVip: true,
      coord: { x: 250, y: 100, width: 60, height: 60 },
    },
    {
      id: 9,
      peopleCount: 3,
      reservedTimes: [["2025-04-22T19:30:00", "2025-04-22T22:00:00"]],
      isVip: true,
      coord: { x: 250, y: 180, width: 60, height: 60 },
    },
    {
      id: 10,
      peopleCount: 6,
      reservedTimes: [["2025-04-20T19:00:00", "2025-04-20T22:00:00"]],
      isVip: false,
      coord: { x: 250, y: 260, width: 60, height: 60 },
    },
    {
      id: 11,
      peopleCount: 5,
      reservedTimes: [["2025-04-21T20:00:00", "2025-04-22T00:00:00"]],
      isVip: false,
      coord: { x: 250, y: 340, width: 60, height: 60 },
    },
    {
      id: 12,
      peopleCount: 5,
      reservedTimes: [["2025-04-20T18:30:00", "2025-04-20T21:00:00"]],
      isVip: false,
      coord: { x: 250, y: 420, width: 60, height: 60 },
    },
    {
      id: 13,
      peopleCount: 2,
      reservedTimes: [["2025-04-22T16:00:00", "2025-04-22T18:30:00"]],
      isVip: false,
      coord: { x: 340, y: 420, width: 60, height: 60 },
    },
    {
      id: 14,
      peopleCount: 7,
      reservedTimes: [["2025-04-22T17:30:00", "2025-04-22T21:00:00"]],
      isVip: false,
      coord: { x: 430, y: 420, width: 60, height: 60 },
    },
  ],
  orderTimeDuration: [1.5, 2, 2.5, 3],
  walls: [
    { x1: 10, y1: 250, x2: 180, y2: 250 },
    { x1: 10, y1: 250, x2: 10, y2: 400 },
    { x1: 180, y1: 10, x2: 180, y2: 410 },
    { x1: 180, y1: 330, x2: 110, y2: 330 },
    { x1: 10, y1: 330, x2: 80, y2: 330 },
  
    { x1: 240, y1: 10, x2: 240, y2: 50 },
    { x1: 240, y1: 60, x2: 240, y2: 125 },
    { x1: 240, y1: 135, x2: 240, y2: 205 },
    { x1: 240, y1: 215, x2: 240, y2: 250 },
  
    { x1: 180, y1: 10, x2: 320, y2: 10 },
    { x1: 240, y1: 90, x2: 320, y2: 90 },
    { x1: 240, y1: 170, x2: 320, y2: 170 },
    { x1: 240, y1: 250, x2: 320, y2: 250 },
  
    { x1: 320, y1: 10, x2: 320, y2: 410 },
    { x1: 320, y1: 410, x2: 500, y2: 410 },
    { x1: 500, y1: 410, x2: 500, y2: 490 },
  ]  
  
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    booking: (state, { payload }) => {
      const newReservationTime = [payload.choicesDate, payload.choicesDateEnd];
      const place = state.places.find((p) => p.id === payload.id);
      if (place) {
        place.reservedTimes.push(newReservationTime);
      }
    },
    unReserve: (state, {payload}) => {
      const index = state.places.findIndex(place => place.id === payload.table)
      state.places[index].reservedTimes = state.places[index].reservedTimes.filter(time => JSON.stringify(time) !== JSON.stringify(payload.times))
    
    }
  },
});

export const { booking, unReserve } = reservationSlice.actions;

export default reservationSlice.reducer;
