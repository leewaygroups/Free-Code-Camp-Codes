/*Friendly Date Ranges
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.split()
String.prototype.substr()
parseInt()
*/

/**Solution by Prince O. Onyenike */


var months = {
      "01": "January",
      '02': "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      '11': "November",
      '12': "December"
  };

function makeFriendlyDates(arr) {
  var noBeginingYear;
  var noEndingMonth;

  //date1 == date2
  if(arr[0] === arr[1]){
    arr = arr[0].split("-");
    var newDate = "";
    newDate += months[arr[1]] + " " + getOrdinalDay(arr[2]) + ", " + arr[0];
    return [newDate];
  }

  var dateArr = arr.map(function(element){
      return element.split("-");
  });

  var lessThanAYear = lessThanAYearFromBegining(arr);
  if(dateArr[0][0] === '2016' && lessThanAYear){
    noBeginingYear = true;
  }

  if(dateArr[0][0] === dateArr[1][0] && dateArr[0][1] === dateArr[1][1]){
    noEndingMonth = true;
  }

  var newBeginingDate = "";
  newBeginingDate += months[dateArr[0][1]] + " " + getOrdinalDay(dateArr[0][2]);
  if(!noBeginingYear){
    newBeginingDate += ", " + dateArr[0][0];
  }

  var newEndDate = "";
  if(!noEndingMonth){
     newEndDate += months[dateArr[1][1]] + " ";
  }
  newEndDate += getOrdinalDay(dateArr[1][2]);
  if(!lessThanAYear){
    newEndDate += ", " + dateArr[1][0];
  }

  return [newBeginingDate, newEndDate];
}

function lessThanAYearFromBegining(arr){
  return  Math.abs((new Date(arr[1]) - new Date(arr[0]))/(1000 * 60 * 60 * 24)) < 365;
}

function getOrdinalDay(day){
  var ordinalDay;
  switch (day[day.length - 1]) {
      case '1':
          ordinalDay = day + "st";
          break;

        case '2':
          ordinalDay = day + "nd";
          break;

        case '3':
          if(day === '13'){
            ordinalDay = day + "th";
          }else{
             ordinalDay = day + "rd";
          }
          break;

      default:
          ordinalDay = day + "th";
          break;
  }
  if(ordinalDay[0] === '0'){
      ordinalDay = ordinalDay.substr(1);
  }

  return ordinalDay;
}

module.exports = makeFriendlyDates;

/**Test cases */
/*
var test = makeFriendlyDates(["2016-07-01", "2016-07-04"]); //["July 1st","4th"]
var test = makeFriendlyDates(["2018-01-13", "2018-01-13"]); //["January 13th, 2018"]
var test = makeFriendlyDates(["2022-09-05", "2023-09-05"]); //["September 5th, 2022","September 5th, 2023"]
*/

function makeFriendlyDates(str) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Convert a YYYY-MM-DD string into a date object.
  function convertDate(str) {
    // Split the dates to work independently.
    var dateStr = str.split('-');

    // Force the dates into Universal time to avoid issues due to timezones.
    return (new Date(Date.UTC(dateStr[0], dateStr[1] - 1, dateStr[2])));

  }

  // Handles the case of the day's endings.
  function dateEnding(val) {
    switch (val) {
      case 1:
      case 21:
      case 31:
        return val + 'st';
      case 2:
      case 22:
        return val + 'nd';
      case 3:
      case 23:
        return val + 'rd';
      default:
        return val + 'th';
    }
  }

  // Checks for the real difference in months to avoid errors
  function monthDiff(date1, date2) {
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    return month2 - month1;
  }

  //day diff
  function dayDiff(date1, date2) {
    if(date2.getUTCMonth() === date1.getUTCMonth()){
      return date1.getUTCDate()-date2.getUTCDate();
    }
    return 0;
  }

  // Get's the right month string.
  function getMonth(date) {
    return months[date.getUTCMonth()];
  }

  function displayDate() {

    // Handles same day
    if (date2.getTime() - date1.getTime() === 0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    }

    // Handles same month
    if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and different year
    if (monthDiff(date1, date2) < 12 && date1.getUTCFullYear() !== date2.getUTCFullYear() ) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles same month but different year
    if (monthDiff(date1, date2) <= 12 && dayDiff(date1, date2)>0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months and same year
    if (monthDiff(date1, date2) < 12) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate())+', '+date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles cases with more than 12 months apart.
    return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
  }

  var date1 = convertDate(str[0]);
  var date2 = convertDate(str[1]);

  return displayDate();

}
