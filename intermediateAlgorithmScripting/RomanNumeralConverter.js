/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()*/

/**Solution by Prince O. Onyenike */


 var rom= ['M', 'CM' , 'D', 'CD' , 'C', 'XC', 'L', 'IXL', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 var num = [1000, 900, 500, 400, 100, 90, 50, 49, 40, 10, 9, 5, 4, 1];

var result = "";
function convertToRoman(number) {
  var index = 0;
  if(number <= 0) return;
  while (num.length) {
    if(number < num[index]) {
      num.shift(); rom.shift(); continue;
    }
    var mod = number % num[index];
    if(mod === 0 ){
      if(num.indexOf(number) === -1){
        result += rom[index].repeat(parseInt(number/num[index]));
      }else{
         result += rom[index];
      }
       num.shift(); rom.shift(); convertToRoman(mod);
    }else{
      result += rom[index].repeat(parseInt(number/num[index]));
      num.shift(); rom.shift(); convertToRoman(mod);
    }
  }

  return result;
}

convertToRoman(6)
