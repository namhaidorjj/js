//3-iin zeregiig oloh
function funcx3(x){
    return(x **= 3)
  }
  let input = funcx3(6)
  console.log(input)
  //Гурвалжны талбай олох
  var side1 = 2;
  var side2 = 3;
  var side3 = 4;
  var s = (side1 + side2 + side3)/2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  console.log(area)
  //Давхцал
function entry(string) {
  let result = string[0]; 
  for (let i = 1; i < string.length; i++) {
      if (string[i] !== string[i - 1]) {
          result += string[i];
      }
  }
  return result;
}
const string = "aabbccd";
console.log(entry(string));
//x -г орлуулахад гарах хариуг буцаана уу.

