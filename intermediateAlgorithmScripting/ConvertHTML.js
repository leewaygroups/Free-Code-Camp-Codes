/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()*/

/**Solution by Onyenike O. Prince */


function convertHTML(str) {
  var xterTable = {
    '&': '&amp;',
    "'": '&apos;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  };

   return str.replace(/[\&<>"']/ig,function (p) {return xterTable[p];});
}

module.exports = convertHTML;

//convertHTML("Dolce & Gabbana");