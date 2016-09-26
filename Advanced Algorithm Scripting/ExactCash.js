/*Exact Change
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object*/

/**Solution by Prince O. Onyenike */

function checkCashRegister(price, cash, cid) {
  var denominations = [
    {'name': 'ONE HUNDRED'  , value: 100.00},
    {'name': 'TWENTY'       , value: 20.00},
    {'name': 'TEN'          , value: 10.00},
    {'name': 'FIVE'         , value: 5.00},
    {'name': 'ONE'          , value: 1.00},
    {'name': 'QUARTER'      , value: 0.25},
    {'name': 'DIME'         , value: 0.10},
    {'name': 'NICKEL'       , value: 0.05},
    {'name': 'PENNY'        , value: 0.01}
  ];
    var totalCashInDrawer = 0.0;
    for (var j = 0; j < cid.length; j++) {
        totalCashInDrawer += cid[j][1];
    }

    var changeDue = cash - price;

    if(totalCashInDrawer < changeDue){
        console.log("Insufficient Funds");
        return "Insufficient Funds";
    }else if(totalCashInDrawer === changeDue){
        console.log("Closed");
        return "Closed";
    }

    var result = [];
    cid = cid.reverse();
    for(var i=0; i<denominations.length; i++){
      var value = 0.0;
      if(changeDue >= denominations[i].value){
        while (changeDue >= denominations[i].value && cid[i][1] >= denominations[i].value) {
          value += denominations[i].value;
          changeDue -= denominations[i].value;
          changeDue = Math.round(changeDue * 100)/100;
          cid[i][1] -= denominations[i].value;
        }
        result.push([denominations[i].name, value]);
      }
    }


    return changeDue === 0 ? result : "Insufficient Funds";

}

/**Solution by Prince O. Onyenike. Inspired by Stephen Mayeux */

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
