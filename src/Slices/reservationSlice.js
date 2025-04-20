import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  places: [
    {
      id: 1,
      peopleCount: 4,
      reservedTimes: [
        ["2025-04-20T17:30:00", "2025-04-20T19:00:00"],
        ["2025-04-22T20:00:00", "2025-04-22T23:00:00"],
      ],
      isVip: false,
      coord: { x: 165, y: 460, width: 60, height: 60 },
    },
    {
      id: 2,
      peopleCount: 6,
      reservedTimes: [["2025-04-21T18:00:00", "2025-04-21T22:00:00"]],
      isVip: false,
      coord: { x: 255, y: 460, width: 60, height: 60 },
    },
    {
      id: 3,
      peopleCount: 3,
      reservedTimes: [["2025-04-22T17:00:00", "2025-04-22T20:00:00"]],
      isVip: false,
      coord: { x: 165, y: 380, width: 60, height: 60 },
    },
    {
      id: 4,
      peopleCount: 5,
      reservedTimes: [["2025-04-22T19:00:00", "2025-04-22T23:00:00"]],
      isVip: false,
      coord: { x: 255, y: 380, width: 60, height: 60 },
    },
    {
      id: 5,
      peopleCount: 2,
      reservedTimes: [["2025-04-20T18:00:00", "2025-04-20T21:00:00"]],
      isVip: false,
      coord: { x: 165, y: 300, width: 60, height: 60 },
    },
    {
      id: 6,
      peopleCount: 7,
      reservedTimes: [["2025-04-21T19:00:00", "2025-04-21T22:00:00"]],
      isVip: false,
      coord: { x: 255, y: 300, width: 60, height: 60 },
    },
    {
      id: 7,
      peopleCount: 4,
      reservedTimes: [["2025-04-22T18:00:00", "2025-04-22T22:30:00"]],
      isVip: true,
      coord: { x: 395, y: 60, width: 60, height: 60 },
    },
    {
      id: 8,
      peopleCount: 7,
      reservedTimes: [["2025-04-21T17:00:00", "2025-04-21T20:00:00"]],
      isVip: true,
      coord: { x: 395, y: 140, width: 60, height: 60 },
    },
    {
      id: 9,
      peopleCount: 3,
      reservedTimes: [["2025-04-22T19:30:00", "2025-04-22T22:00:00"]],
      isVip: true,
      coord: { x: 395, y: 220, width: 60, height: 60 },
    },
    {
      id: 10,
      peopleCount: 6,
      reservedTimes: [["2025-04-20T19:00:00", "2025-04-20T22:00:00"]],
      isVip: false,
      coord: { x: 395, y: 300, width: 60, height: 60 },
    },
    {
      id: 11,
      peopleCount: 5,
      reservedTimes: [["2025-04-21T20:00:00", "2025-04-22T00:00:00"]],
      isVip: false,
      coord: { x: 395, y: 380, width: 60, height: 60 },
    },
    {
      id: 12,
      peopleCount: 5,
      reservedTimes: [["2025-04-20T18:30:00", "2025-04-20T21:00:00"]],
      isVip: false,
      coord: { x: 395, y: 460, width: 60, height: 60 },
    },
    {
      id: 13,
      peopleCount: 2,
      reservedTimes: [["2025-04-22T16:00:00", "2025-04-22T18:30:00"]],
      isVip: false,
      coord: { x: 485, y: 460, width: 60, height: 60 },
    },
    {
      id: 14,
      peopleCount: 7,
      reservedTimes: [["2025-04-22T17:30:00", "2025-04-22T21:00:00"]],
      isVip: false,
      coord: { x: 575, y: 460, width: 60, height: 60 },
    },
  ],
  orderTimeDuration: [1.5, 2, 2.5, 3],
  walls: [
    { x1: 155, y1: 290, x2: 325, y2: 290 },
    { x1: 155, y1: 290, x2: 155, y2: 520 },
    { x1: 325, y1: 50, x2: 325, y2: 440 },
    { x1: 325, y1: 370, x2: 255, y2: 370 },
    { x1: 155, y1: 370, x2: 225, y2: 370 },

    { x1: 385, y1: 50, x2: 385, y2: 85 },
    { x1: 385, y1: 95, x2: 385, y2: 165 },
    { x1: 385, y1: 175, x2: 385, y2: 245 },
    { x1: 385, y1: 255, x2: 385, y2: 290 },

    { x1: 325, y1: 50, x2: 465, y2: 50 },
    { x1: 385, y1: 130, x2: 465, y2: 130 },
    { x1: 385, y1: 210, x2: 465, y2: 210 },
    { x1: 385, y1: 290, x2: 465, y2: 290 },

    { x1: 465, y1: 50, x2: 465, y2: 450 },
    { x1: 465, y1: 450, x2: 645, y2: 450 },
    { x1: 645, y1: 450, x2: 645, y2: 520 },
  ],
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
  },
});

export const { booking } = reservationSlice.actions;

export default reservationSlice.reducer;
