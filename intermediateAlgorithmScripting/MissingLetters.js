/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()*/

/**Solution by Prince O. Onyenike */


function fearNotLetter(str) {
    var result;
    for(var i=1; i<str.length; i++){
        if(str[i].charCodeAt() - str[i-1].charCodeAt() > 1 ){
             result = String.fromCharCode(str[i-1].charCodeAt() + 1);
            break;
        }
    }
  return result;
}

module.exports = fearNotLetter;

//fearNotLetter("abce");