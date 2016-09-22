/*Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()*/

/**Solution by Prince O. Onyenike */


function translatePigLatin(str) {
  str = str.split("");
  var vawels = ["a", "e", "i", "o", "u"];
  var index = 0;
  while(index < str.length){
    if(vawels.indexOf(str[index])!== -1){
      break;
    }
    index++;
  }

  if(index === 0){
    str = str.join("") + "way";
  }else {
    var temp = str.splice(0, index)
    str = str.concat(temp).join("") + "ay";
  }

  return str
}

module.exports = translatePigLatin;
//translatePigLatin("eight");