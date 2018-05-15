// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function isPrime(n){
  for(var i=2;i<=n/2;i++){
  	if(n%i==0){
  	  return false;
  	}
  }
  return true;
}

function primeFactorsOf(n){
  var pfs = [];
  var i = 2;

  while(isPrime(n) == false){
	if(n%i==0){
  	 pfs.push(i);
  	 n = n/i;
    } else {
     i++;
    }
  }

  pfs.push(n);

  return pfs;
}