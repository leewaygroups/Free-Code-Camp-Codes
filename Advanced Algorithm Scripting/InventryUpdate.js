/*Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Array Object*/

/**Solution by Prince O. Onyenike */


function updateInventory(arrCurr, arrNew) {
  if(arrCurr.length === 0){
    return arrNew;
  }

  for(var j=0; j<arrNew.length; j++){
    for (var i = 0; i < arrCurr.length; i++) {
     if(arrCurr[i][1] === arrNew[j][1]){
       arrCurr[i] = [arrCurr[i][0] + arrNew[j][0], arrCurr[i][1]]; break;
     }else if(i+1 === arrCurr.length){
       arrCurr.push(arrNew[j]);
     }
    }
  }

  var result = arrCurr.sort(function(a, b){
    return a[1] > b[1];
  });

  return result;
}


// Example inventory lists
/*var test = updateInventory(
  [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
  [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

console.log(test);

//expect:
[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]*/