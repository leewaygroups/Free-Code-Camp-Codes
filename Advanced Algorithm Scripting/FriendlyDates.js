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
      "01": "JANUARY",
      '02': "FEBRYARY",
      "03": "MARCH",
      "04": "APRIL",
      "05": "MAY",
      "06": "JUNE",
      "07": "JULY",
      "08": "AUGUST",
      "09": "SEPTEMBER",
      "10": "OCTOBER",
      '11': "NOVEMBER",
      '12': "DECEMBER"
  };

function makeFriendlyDates(arr) {
    var isSameYear = false;
    var isSameMonth = false;
    var firstDate = "";
    var secondDate = "";
    var result = [];

  var arr = arr.map(function(element){
      return formartDate(element.split("-"));
  });

  for(var i=0; i<arr[0].length; i++){
      if(i === 0 && arr[0][i] === arr[1][i]){
          isSameYear = true;
      }else{
          firstDate += arr[0][i];
      }
  }

}

function formartDate(dateArr){
    var result = [];
    for(var i=0; i<dateArr.length; i++){
        if(i === 0){
            result[2] = dateArr[0];
        }
        if(i === 1){
             result[0] = months[dateArr[i]];
        }

        if(i === 2){
            switch (dateArr[i][dateArr[i].length - 1]) {
                case '1':
                    result[1] = dateArr[i] + "st";
                    break;

                 case '2':
                    result[1] = dateArr[i] + "nd";
                    break;

                 case '3':
                    result[1] = dateArr[i] + "rd";
                    break;

                default:
                    result[1] = dateArr[i] + "th";
                    break;
            }

            if(result[1][0] === '0'){
                result[1] = result[1].substr(1);
            }
        }
    }

    return result;
}

//var test = formartDate('2016-07-01'.split("-"))

makeFriendlyDates(['2016-07-01', '2016-07-04']); //yyyy-mm-dd


// ["December 1st, 2016","February 3rd, 2018"].
// ["March 1st, 2017","May 5th"]
// ["July 1st","4th"]
