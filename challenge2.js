/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}

greet("doha");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n%2 === 1){
    //console.log("true");
    return true;
  } else {
    //console.log("false");
    return false;
  }
}

isOdd(7);
isOdd(14);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  let counter;
  if (n%2 === 0){
      counter = n/2;
    } else {
      counter = (n-1)/2;
    }
  //console.log(counter);
  return counter;
}

oddsSmallerThan(7);
oddsSmallerThan(15);


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  let newNum;
  if (n%2 === 1){
    newNum = n*n;
  } else {
    newNum = 2*n;
  }
  //console.log(newNum);
  return newNum;
}

squareOrDouble(16);
squareOrDouble(9);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
