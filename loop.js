//easy-1
// var num = 100;
// for(var i = 1; i <= num; i++){
//     console.log(i)
// }
//easy-2

let sum=0; 
for(i=1;i<6;i++)
{
  if(i%2==0)
  {
    sum=sum+i
  }
}
console.log(sum)
//easy-3
var numbers = 0;
for (let e = 0; e <= 5; e++){
  numbers = numbers + e;
}console.log(numbers)
//easy-4
let a = 12;
let zereg = 0;
let urjver = 0;
if( a == 1 || a > 999){
 console.log('Ta 1 ees ih 1000s baga too oruulna uu')
}else {
  while(urjver <= 1000){
  zereg++;
  urjver = a ** zereg
  } 
  console.log(`${a} toonii ${zereg}n zereg n 1000s ih buyu ${urjver}bn `)
}
