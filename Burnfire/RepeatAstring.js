/*Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object*/

/**Solution by Prince. Onyenike */

function repeatStringNumTimes(str, num) {
  if(num < 0) return "";
  return str.repeat(num);
}

module.exports = repeatStringNumTimes;