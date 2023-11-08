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
