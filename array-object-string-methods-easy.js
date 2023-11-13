//Ascending order
const order = { 'b': 2, 'a': 1, 'c': 3 };
const unorder = Object.entries(order);
for(let i = 0; i < unorder.length; i++){
    for(let u = 0; u < unorder.length; u ++)
    if(unorder[i][1] < unorder[u][1]){
    let x = unorder[i];
    unorder[i] = unorder[u];
    unorder[u] = x;
}
}
console.log(unorder)
//Array reverse
var person = {
    firstname: "Namkhaidorj",
    lastname: "Batbaatar",
    fullName: function() {
        if(this.firstname && this.lastname) {
            this.fullName = this.firstname + " " + this.lastname.toUpperCase();
            console.log("ta buten neree oruulna uu!")

        }
    }
}
person.fullName();
console.log(person.fullName)
//Array reverse
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reversedArray = array.reverse()
console.log(reversedArray)
//readme
const readme = 8;
const nuum = (1, 2, 3, 4, 8, 9, 55, 66);
function findVariable(readme){
    for(let a = 0; a < nuum.length; a++){
    if(nuum[i] === readme){
        return i;
    } console.log
} return null;
} 
const index = findVariable(readme)
for(z = 0; z = readme.length; z++)
    if(readme = z == readme[z])

console.log(`Element ${readme} have`)
console.log(`Element ${readme} is a ${index} in have`) 