// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function reverseNum(str){
  str = str.toString().split("").reverse().join("");
  return str;
}

function isPalindrome(n){
  if(reverseNum(n) == n){
  	return true;
  }
  return false;
}



products = [];

for(i = 100;i<=999;i++){
  for(j = 100;j<=999;j++){
  	if(isPalindrome(i*j) == true){
  	  products.push(i*j);
  	}
  }
}

products = products.sort((a, b) => a - b);

largest = products[products.length-1];