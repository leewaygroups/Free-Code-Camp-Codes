/*Symmetric Difference
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
Symmetric Difference*/

/**Solution by Prince O. Onyenike */


function sym(args) {
  var symdiff = [];
   for(var i=0; i< arguments.length; i++){
      symdiff = symer(symdiff, arguments[i]);
  }

  return symdiff;

  function symer(A, B){
    var result = [];
    A.filter(function(elem){
      if(B.indexOf(elem) === -1 && result.indexOf(elem) === -1){
        result.push(elem);
      }
    });

     B.filter(function(elem){
      if(A.indexOf(elem) === -1 && result.indexOf(elem) === -1){
        result.push(elem);
      }
    });
    return result;
  }
}

module.exports = sym;

//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) // [1,4,5]