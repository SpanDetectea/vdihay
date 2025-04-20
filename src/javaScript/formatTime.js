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
