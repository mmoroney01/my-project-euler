// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

for(var a=1;a<=1000;a++){
  for(var b=1;b<=1000;b++){
  	c2 = a*a + b*b;
  	c = Math.sqrt(c2);
  	if(Number.isInteger(c) && a + b + c == 1000){
  	  return a * b * c;
  	}
  }
}