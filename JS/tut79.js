/* 
    *   A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
    *   In other words, a closure gives you access to an outer function's scope from an inner function
*/

function abc()
{
    var p = 78; //even though it's var it's local variable due to functional scope
    console.log(p);
}

/* console.log(p) // error as no p is defined */

// abb dekh child function parent function ke variables ko access kr sakta hai

function makeFunc() 
{
    const name = "Mozilla";
    function displayName() 
    {
        console.log(name);
    }
    return displayName;
}
  
const myFunc = makeFunc();
myFunc();

/* 
    * toh dekh bhai jab bhi hum koi function inner function ko return krte hai na tab uska reference return hota hai aur uske saath hi uske parent ka poora poora lexical environment yane ki uske parent ki definition ka reference
    * issiliye bhai yaha par jab makeFunc() chala tab usne displayName() ko return kiya aure woh returned function myFunc mein store ho gaya
    * aur myFunc jab chala tab usne Mozilla hi print kiya kyo ki poora ka poora parent function ka environment return hua tha

*/
  
function makeAdder(x) 
{
    return function (y) 
    {
      return x + y;
    };
}
  
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// ya par return ek function ho raha hai jo ek value le kar x aur y ka sum return kare 