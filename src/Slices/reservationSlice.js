import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  places: [
    {
      id: 1,
      peopleCount: 4,
      reservedTimes: [
        ["2025-04-18T18:00:00", "2025-04-18T20:00:00"],
        ["2025-04-18T22:00:00", "2025-04-18T23:45:00"],
        ["2025-04-19T17:30:00", "2025-04-19T19:00:00"],
      ],
      isVip: false,
      coord: { x: 165, y: 460, width: 60, height: 60 },
    },
    {
      id: 2,
      peopleCount: 6,
      reservedTimes: [["2025-04-11T19:30:00", "2025-04-11T21:00:00"]],
      isVip: false,
      coord: { x: 255, y: 460, width: 60, height: 60 },
    },
    {
      id: 3,
      peopleCount: 3,
      reservedTimes: [],
      isVip: false,
      coord: { x: 165, y: 380, width: 60, height: 60 },
    },
    {
      id: 4,
      peopleCount: 5,
      reservedTimes: [
        ["2025-04-11T17:00:00", "2025-04-11T19:00:00"],
        ["2025-04-13T20:00:00", "2025-04-13T22:00:00"],
      ],
      isVip: false,
      coord: { x: 255, y: 380, width: 60, height: 60 },
    },
    {
      id: 5,
      peopleCount: 2,
      reservedTimes: [["2025-04-11T18:30:00", "2025-04-11T19:30:00"]],
      isVip: false,
      coord: { x: 165, y: 300, width: 60, height: 60 },
    },
    {
      id: 6,
      peopleCount: 7,
      reservedTimes: [["2025-04-11T19:00:00", "2025-04-11T21:00:00"],["2025-04-19T19:00:00", "2025-04-19T21:00:00"]],
      isVip: false,
      coord: { x: 255, y: 300, width: 60, height: 60 },
    },
    {
      id: 7,
      peopleCount: 4,
      reservedTimes: [],
      isVip: true,
      coord: { x: 395, y: 60, width: 60, height: 60 },
    },
    {
      id: 8,
      peopleCount: 7,
      reservedTimes: [["2025-04-11T20:30:00", "2025-04-11T22:30:00"]],
      isVip: true,
      coord: { x: 395, y: 140, width: 60, height: 60 },
    },
    {
      id: 9,
      peopleCount: 3,
      reservedTimes: [["2025-04-11T18:15:00", "2025-04-11T19:45:00"]],
      isVip: true,
      coord: { x: 395, y: 220, width: 60, height: 60 },
    },
    {
      id: 10,
      peopleCount: 6,
      reservedTimes: [],
      isVip: false,
      coord: { x: 395, y: 300, width: 60, height: 60 },
    },
    {
      id: 11,
      peopleCount: 5,
      reservedTimes: [
        ["2025-04-11T19:45:00", "2025-04-11T21:45:00"],
        ["2025-04-12T22:00:00", "2025-04-12T23:30:00"],
      ],
      isVip: false,
      coord: { x: 395, y: 380, width: 60, height: 60 },
    },
    {
      id: 12,
      peopleCount: 5,
      reservedTimes: [["2025-04-11T20:00:00", "2025-04-11T21:00:00"]],
      isVip: false,
      coord: { x: 395, y: 460, width: 60, height: 60 },
    },
    {
      id: 13,
      peopleCount: 2,
      reservedTimes: [],
      isVip: false,
      coord: { x: 485, y: 460, width: 60, height: 60 },
    },
    {
      id: 14,
      peopleCount: 7,
      reservedTimes: [
        ["2025-04-11T17:30:00", "2025-04-11T19:00:00"],
        ["2025-04-13T18:00:00", "2025-04-13T20:00:00"],
      ],
      isVip: false,
      coord: { x: 575, y: 460, width: 60, height: 60 },
    },
  ],


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
    increment: (state) => {
      // Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
      // Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
      // которая следит за изменениями в "черновом state" и создает новое
      // неизменное состояние на основе этих изменений
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  reservationSlice.actions;

export default reservationSlice.reducer;
