// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

function oneLink(n){
  if(n % 2 == 0){
  	return n/2;
  } else {
  	return (n*3)+1;
  }
}

function collatzChain(n){
  var total = 1;

  while(n!=1){
  	n = oneLink(n);
  	total++;
  }

  return total;
}

highest_link_num = 0;
highest_num = 0

for(var j=1;j<=999999;j++){
  links = collatzChain(j)
  if(links >= highest_link_num){
  	highest_num = j;
  	highest_link_num = links;
  }
}