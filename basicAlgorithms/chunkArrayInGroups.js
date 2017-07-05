
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var chunkArr = [];
  
  for (var i = 0; i < arr.length; i += size) {
    chunkArr.push(arr.slice(i, i + size));
  }
  
  return chunkArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
