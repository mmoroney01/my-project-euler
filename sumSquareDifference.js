// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

sumOfSquares = 0;
squareOfSums = 0;

for(var i=1;i<=100;i++){
  sumOfSquares = sumOfSquares + Math.pow(i,2);
  squareOfSums = squareOfSums + i;
}

squareOfSums = Math.pow(squareOfSums,2);

answer = squareOfSums - sumOfSquares;
