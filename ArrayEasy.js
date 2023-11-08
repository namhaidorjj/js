//Array Members Average
const number = [10 ,20, 30, 40, 50]
let avrg = 0;
let avg;
for (let i = 0; i < number.length; i++) {
avrg += number[i];
}
avg = avrg / number.length
console.log(avg)
//Fibonacci sequence
var fibo = [0, 1];
n = 100
for(let i = 1; i <= n; i++){
fibo.push (fibo[i] + fibo[i - 1])
}
console.log(fibo)
//Change array last element
var last = [10, 20, 30, 40, 50];
last.pop();
last.push(30);
//Sum positive even number
let numbers = [2, -3, 5, 6, -8, 10];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0 && numbers [i] % 2 ==0){
    sum += numbers[i];
  }
}
console.log(sum)