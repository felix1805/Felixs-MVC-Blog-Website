module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    const currentYear = date.getFullYear();
    date.setFullYear(currentYear + 5);
    return date.toLocaleDateString();
  }
};
// module.exports = {
//   format_time: (date) => {
//     return date.toLocaleTimeString();
//   },
//   format_date: (date) => {
//     const month = new Date().getMonth();
//     const day = new Date().getDate();
//     const year = new Date().getFullYear();
//     return date.toLocaleDateString();
//     return `${month}/${day}/${year}`;
//   },
// };