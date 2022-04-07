module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const currentYear = date.getFullYear();
    date.setFullYear(currentYear);
    return date.toLocaleDateString();
  }
};
