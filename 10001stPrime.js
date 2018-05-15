// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(n){
  for(var i=2;i<=n/2;i++){
  	if(n%i==0){
  	  return false;
  	}
  }
  return true;
}

var primes = [];
var i = 2;

while(primes.length!=10001){

  if(isPrime(i)==true){
  	console.log(i);
    primes.push(i);
  }
  i++;
}