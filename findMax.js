function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  let arr = [4, 8, 45, 7, 4];
  console.log(findMax(arr)); 

 // Time Complexity: O(n)