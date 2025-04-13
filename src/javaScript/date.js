export function getDate() {
  const date = Date.now();
  const firstDate = new Date(date);
  const firstYear = firstDate.getFullYear();
  let month = firstDate.getMonth() + 1;
  const firstMonth = month / 10 >= 1 ? month : "0" + month;
  let day = firstDate.getDate();
  const firstday = day / 10 >= 1 ? day : "0" + day;

  const secondDate = new Date(date + (2 * 24 * 60 * 60 * 1000));
  const secondYear = secondDate.getFullYear();
  month = secondDate.getMonth() + 1;
  const secondMonth = month / 10 >= 1 ? month : "0" + month;
  day = secondDate.getDate();
  const secondday = day / 10 >= 1 ? day : "0" + day;

  // const curHours = firstDate.getHours()
  // const curMinutes = firstDate.getMinutes()

  return {
    firstYear,
    firstMonth,
    firstday,
    secondYear,
    secondMonth,
    secondday,
    // curHours,
    // curMinutes
  };
}

// export function getTime(choiceDate) {
//   const date = new Date(choiceDate)
//   const curDate = new Date(Date.now())

//   const curHours = date.getHours()
//   const curMinutes = date.getMinutes()
  
//   const newDate = new Date(date.setHours(11))
//   const startHours = newDate.getHours()
//   const startMinutes = newDate.getMinutes()


//   console.log(curDate < newDate)
// }