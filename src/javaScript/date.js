import { formatTime } from "./formatTime";

export function getDate() {
  const date = Date.now();
  const firstDate = new Date(date);
  const firstYear = firstDate.getFullYear();
  let month = firstDate.getMonth() + 1;
  const firstMonth = month / 10 >= 1 ? month : "0" + month;
  let day = firstDate.getDate();
  const firstday = day / 10 >= 1 ? day : "0" + day;

  const secondDate = new Date(date + 2 * 24 * 60 * 60 * 1000);
  const secondYear = secondDate.getFullYear();
  month = secondDate.getMonth() + 1;
  const secondMonth = month / 10 >= 1 ? month : "0" + month;
  day = secondDate.getDate();
  const secondday = day / 10 >= 1 ? day : "0" + day;

  return {
    firstYear,
    firstMonth,
    firstday,
    secondYear,
    secondMonth,
    secondday,
  };
}

export const generateTimeSlots = (selectedDate, firstYear, firstMonth, firstday) => {
  const todayStr = `${firstYear}-${firstMonth}-${firstday}`;
  const slots = [];
  const now = new Date();
  const selectedDay = new Date(selectedDate);
  const isToday = selectedDate === todayStr;

  // Временные слоты с 11:00 до 23:45
  for (let hour = 11; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const slot = new Date(selectedDay);
      slot.setHours(hour, min, 0, 0);
      const disabled = isToday && slot < now;
      if (!disabled) {
        slots.push({ time: formatTime(hour, min), disabled });
      }
    }
  }

  // Временные слоты с 00:00 до 02:30 следующего дня
  const nextDay = new Date(selectedDay);
  nextDay.setDate(nextDay.getDate() + 1);
  for (let hour = 0; hour < 3; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const slot = new Date(nextDay);
      slot.setHours(hour, min, 0, 0);
      const disabled = isToday && slot < now;
      slots.push({ time: formatTime(hour, min), disabled });
    }
  }
  return slots;
};
export function sortReservedTimesByStart(places) {
  return places.map(place => ({
    ...place,
    reservedTimes: [...place.reservedTimes].sort((a, b) =>
      new Date(a.times[0]) - new Date(b.times[0])
    )
  }));
}

export const getStartEndPoints = (choiseDate) => {
  const curDate = new Date();
  const choiceDayDate = new Date(choiseDate);
  const endPoint = new Date(choiseDate);
  const startPoint = new Date(choiseDate);
  endPoint.setDate(endPoint.getDate() + 1);
  endPoint.setHours(11, 0, 0, 0);
  if (choiceDayDate.getDate() === curDate.getDate()) {
    startPoint.setHours(curDate.getHours(), curDate.getMinutes(), 0, 0);
  } else {
    startPoint.setHours(11, 0, 0, 0);
  }
  return { startPoint, endPoint };
};