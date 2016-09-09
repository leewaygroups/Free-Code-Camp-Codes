/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

/**Solution by Prince O. Onyenike */


function rot13(str) {
  var res = "";
  for(var i=0; i<str.length; i++){
    if(/[A-Z]/.test(str[i])){
      str[i] <= "M" ? res = res + String.fromCharCode(str.charCodeAt(i) + 13) : res = res + String.fromCharCode(str.charCodeAt(i) - 13);
    }else{
       res = res + str[i];
    }
  }

  return res;
}

module.exports = rot13;
//rot13("SERR PBQR PNZC"); //"FREE CODE CAMP"