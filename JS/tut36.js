/* 
    Variables in JS 

    1. var : gloabal scope variable, starts to act as global the moment declared even in loops
    2. let : local scope variable 
    3. const : local scope constant can't be changed
*/
/* const abc = () => */

{
    inp = 15489;    // declare as var implicitly
    let k = "Khushal";
    const name1 = "Patil Khushal Suresh"
}

console.log(inp);   // logs 15489
console.log(k);     // generates error
console.log(name1);     // generates error

let k1 = "Khushal";
const name2 = "Patil Khushal Suresh"
console.log(k1);     // generates error
console.log(name2);     // generates error