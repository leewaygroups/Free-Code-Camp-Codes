/*Validate US Telephone Numbers
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp*/

/**Solution by Prince O. Onyenike */


function telephoneCheck(str) {
   return /^(1\s|1)?((\(\d{3}\))|(\d{3}))(\s|-)?(\d{3})(\s|-)?(\d{4})$/.test(str);
}


/**RegExp Explanantion */
/* ^(1\s|1)? ===> Caputures: (1 and space) OR 1 OR nill
   ((\(\d{3}\))|(\d{3})) ===> This is an either or capture groups
         First group: (\(\d{3}\)) ===> Caputures: (555)
         Second group:(\d{3}) ===> Caputures: 555
  (\s|-)? ===> Caputures: space OR - or nill
  (\d{4})$ ===> Caputures: 5555 and marks the end.

*/

module.exports = telephoneCheck;