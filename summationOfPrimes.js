// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


//better prime determinator than the one I wrote.
function isPrime(n){
  if(n < 2) return false;
  if(n == 2) return true;
  if(n % 2 == 0) return false;
  for(var i=3; (i*i) <= n; i+=2) {
  	if(n % i == 0) return false;
  }
  return true;
}

sum = 0;

for(var i=2;i<=1999999;i++){
  if(isPrime(i)==true){
  	sum = sum + i;
  }
}