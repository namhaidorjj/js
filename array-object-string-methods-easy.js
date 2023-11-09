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
//Sort By Frequency