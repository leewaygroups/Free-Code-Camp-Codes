function findLongestWord(str) {
  var arr = str.split(" ");
  var num = 0;
  for (var i=0; i<arr.length; i++){
    if(arr[i] > num){
      num = arr[i].length;
    }
  }
  
  return num;
}

findLongestWord("The quick brown fox jumped over the lazy dog");