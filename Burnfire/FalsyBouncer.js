/*Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

/**Solution by Prince O. Onyenike */


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(elem){
    return Boolean(elem);
  });
}

module.exports = bouncer;
//bouncer([7, "ate", "", false, 9]);