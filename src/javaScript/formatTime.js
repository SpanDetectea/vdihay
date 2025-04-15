export const formatTime = (hour, min) =>
    `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
