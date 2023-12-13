/* 
    *   DataTypes in JS *

    * Primitive
        1. Number 
        2. BigInt
        3. Boolean
        4. Undefined
        5. String
        6. Symbol
    
    * Non Primitives
        1. Object
        2. Arrays
*/
let a = 154;
console.log(typeof a);

let b = BigInt(154978787998898898898997897484154978787998898898898997897484154978787998898898898997897484154978787998898898898997897484);
console.log(typeof b);

let c = true;
console.log(c);

b = BigInt(c)
console.log(b);

let d;
console.log(typeof d);

let e = "Patil Khushal Suresh"
console.log(e);

let obj = 
{
    firstName : "Khushal",
    middleName : "Suresh",
    lastName : "Patil",
};

console.log(obj)

let arr = [1, 2, 3, "abc", 89, "abc", obj]
console.log(typeof(arr) + "\t" + arr)

let arr2 = [];
console.log("typeof(arr2) + \"\t\" + arr2 :\t" + typeof(arr2) + "\t" + arr2) // empty array



