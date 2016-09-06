function findLongestWord(str) {
 var lower = str.toLowerCase();
  return lower.replace(/(^| )(\w)/g, function(x) {
    return x.toUpperCase();
  });
}

findLongestWord("The quick brown fox jumped over the lazy dog");