export const formatTime = (hour, min) =>
  `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;

const pad = (num) => String(num).padStart(2, "0");
export const formatDateLocal = (date) => {

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

export const calculateBookingTime = (baseDate, selectedTime, orderTime) => {
  const [hourStr, minuteStr] = selectedTime.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const start = new Date(baseDate);
  if (hour <= 10) {
    start.setDate(start.getDate()+1)
  }
  start.setHours(hour, minute, 0, 0);

  const end = new Date(start);
  const fullHours = Math.floor(orderTime);
  const extraMinutes = (orderTime % 1) * 60;

  end.setHours(end.getHours() + fullHours);
  end.setMinutes(end.getMinutes() + extraMinutes);

  return [start, end];
};

export function formatTimeRange([start, end], withDate = true) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const formatTime = (date) =>
    date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  const startTime = formatTime(startDate);
  const endTime = formatTime(endDate);


  if (withDate) {
    const iso = startDate.toISOString()
    const newDate = new Date(iso)
    const date = startDate.toISOString().split("T")[0];
    return `${initialDate(newDate)} ${startTime} - ${endTime}`;
  }
  return `${startTime} - ${endTime}`;
}
export const isTimeAvailable = (reservedTimes, start, end) => {
  return !reservedTimes.some((time) => {
    const resStart = new Date(time.times[0]);
    const resEnd = new Date(time.times[1]);
    return start < resEnd && resStart < end;
  });
};

export const reservationOfTheDay = (time, start, end) => {
  const resStart = new Date(time[0])
  const resEnd = new Date(time[1])
  return start < resEnd && resStart < end;
}
export function initialDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}