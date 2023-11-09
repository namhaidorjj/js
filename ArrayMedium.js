//chunkk
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let num = 3;
let Arr = [];
for (let i = 0; i < numbers.length / num; i++) {
Arr.push(numbers.slice(i * num, i * num + num));
}
console.log(Arr);
//Find max and min
const find = [1, 3, 5, 22, 89, 46, 17, 31, 59];
var max = find[0];
var min = find[0]
for(let w = 1; w < find.length; w++){
    if (min[w] < min){   
         min = find[w];
        }
   if (max[w] > max){
    max = find[w]
   }
}
 console.log(min,max) 
 // sort an array
 const array = [100, 2, 3 , 8, 19, 4]
for(let i = 0; i < array.length; i++){
  for(let j = 0; j < array.length; j++)
  if(array[i] < array[j]){
    let d = array[i];
    array[i] = array[j];
    array[j] = d;
  }
}
console.log(array) 