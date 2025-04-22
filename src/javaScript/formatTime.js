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
  start.setHours(hour, minute, 0, 0);

  const end = new Date(start);
  const fullHours = Math.floor(orderTime);
  const extraMinutes = (orderTime % 1) * 60;

  end.setHours(end.getHours() + fullHours);
  end.setMinutes(end.getMinutes() + extraMinutes);

  return [start, end];
};
