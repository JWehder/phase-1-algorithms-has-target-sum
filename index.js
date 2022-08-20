function hasTargetSum(array, target) {
  // outer for loop grabbing each individual element
  flag = false;
  let c = 0
  while (c <= array.length) {
    for (let a of array) {
      let index = array.indexOf(a)
      let testArray = array.slice(index + 1)
      console.log(testArray);
      for (let b of testArray) {
        let sum = a + b;
        console.log(sum)
        if (sum === target){
          flag = true
          return flag
        }
      }
    }
  c++;
  }
  return flag
}

/*  Another thought:
for (let a of array){
  let difference = target - a;
  console.log(difference)
  if (difference in array && array.indexOf(difference) !== array.indexOf(a)){
    console.log(difference, a)
    return true
  }
}
*/



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
