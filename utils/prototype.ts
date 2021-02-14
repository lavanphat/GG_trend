// import '../types/date.type';
interface Date {
  addDays(days: number): Date;
}

/**
 * Return date previos
 * @param {number} days
 */
Date.prototype.addDays = function (days: number): Date {
  const date: Date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
