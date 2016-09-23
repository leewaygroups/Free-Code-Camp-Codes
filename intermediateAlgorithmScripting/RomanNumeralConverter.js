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



function convertToRoman(number) {
    var num = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var rom = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var result = "";

    for (var index = 0; index < num.length; index++) {
        while (num[index] <= number) {
            result += rom[index];
            number = number - num[index];
        }
    }

    return result;
}

module.exports = convertToRoman;

//convertToRoman(36);
