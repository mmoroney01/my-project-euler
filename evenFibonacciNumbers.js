//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function nth_fib(n){
  if(n <= 1) return 1;

  return nth_fib(n - 1) + nth_fib(n - 2);
}

var fibs = [];
var i = 1;
var sum = 0;
var overFourmil = function(num){
  if(num > 3999999) return true;
}

while(!fibs.some(overFourmil)){
  fibs.push(nth_fib(i));
  i++;
}

for(i=0;i<=fibs.length-1;i++){
  if(fibs[i] % 2 == 0){
    sum = sum + fibs[i];
  }
}