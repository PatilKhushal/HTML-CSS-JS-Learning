/* 
    JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.


    Any of the following behaviors may be regarded as hoisting:

    1.  Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
    2.  Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
    3.  The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
    4.  The side effects of a declaration are produced before evaluating the rest of the code that contains it.

    *   function, function*, async function, and async function* this are hoisted with type 1 behaviour
    *   var declaration is hoisted with type 2 behavior
    *   let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior
    *   import declarations are hoisted with type 1 and type 4 behavior.
*/

console.log(a);
var a = 45;
console.log(a);

console.log(b);
var b = function varScopeGreet()
{
    console.log("varScopedGreet");
}
console.log(b);

/*
    *   yeh hai var ki hoisting
    *   abb dekh bhai kabhi bhi na hoisting sirf declaration ki hi hoti hai, toh abb line 2 par bhalehi initialization hua ho hoisting sirf declartion ki hi hogi 
    *   ha par var ki jab bhi hoisting hoti hai tab woh varible/function/object/class kuch bhi undefined se initialize ho jaata hai
    *   issilye pehle undefined fir 45 print hua 
*/

/* console.log(c); // this will produce error */
let c;  // initialized will undefined
console.log(c)

/* 
    *   abb dekh bhai let/const ki hoisting ek jaisi hoti hai
    *   tujhe toh pata hai ki hoisting sirf declaration ki hoti hai aur var ki hoisting ke waqt default initialization undefined ke sath hota hai
    *   par const/let ke saath kuch default initializatio nahi hota issilye unhe access nahi kar pate issilye error

*/


