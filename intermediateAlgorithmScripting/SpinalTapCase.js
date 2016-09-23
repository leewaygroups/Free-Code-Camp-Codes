/*Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()*/

/**Solution by Prince O. Onyenike */


function spinalCase(str) {
  return str.replace(/(?!^)([A-Z])/g, ' $1')
            .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
}

module.exports = spinalCase;

//spinalCase('This Is Spinal Tap');