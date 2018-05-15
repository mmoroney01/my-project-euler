// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

answer = 0;
var i = 20;

while(answer==0){
  divs = [];
  
  for(var j=1;j<=20;j++){
     if(i % j == 0){
     	divs.push(j);
     }
  }

  if(divs.length == 20){
    answer = i;
    return answer;
  }

  i++;
}