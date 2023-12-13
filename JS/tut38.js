/* 
    * Loops is JS
        1. for loop : normal loop
        2. for in : loops the keys of all objects, indexed for arrays
        3. for of : loops the values of iterables like array, string not the objects
        4. for each : normal for each only applicable for iterables like array
*/

let obj = {
    item1 : 
    {
        name : "Patil Khushal Suresh",
        place : "Fagne, Dhule", 
        brithDate : "28/2/2003"
    },
    item2 : 
    {
        name : "Patil Unnati Suresh",
        place : "Fagne, Dhule", 
        brithDate : "12/6/2004"
    },
    item3 : 
    {
        name : "Patil Bharati Suresh",
        place : "Fagne, Dhule", 
        brithDate : "-"
    },
    item4 : 
    {
        name : "Patil Suresh Sitaram",
        place : "Fagne, Dhule", 
        brithDate : "-"
    }
}

console.log(obj);
console.table(obj);

// for loop
console.log("for begins");
for(let i = 0; i < Object.keys(obj).length; i++)
{
    console.log(i);
    console.log(obj[Object.keys(obj)[i]]);
}
console.log("for in ends\n\n");


// for in loop
console.log("for in begins");
for(let i in obj)
{
    console.log(obj[i]);
}
console.log("for in ends\n\n");


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for each loop
console.log("for each begins");   
nums.forEach(element => {
    console.log(element)
});
console.log("for each ends\n\n");

// for each loop
console.log("for of begins");   
for(let i of nums)
{
    console.log(i)
}
console.log("for of ends\n\n");

let i = 0;
console.log("while begins");   
while (i < 10) 
{
    console.log((i++) + " is less than 10");
}
console.log("while ends\n\n");

console.log("do while begins");   
do
{
    console.log((i++) + "is less than or equal to 10")
}while(i < 10)
console.log("do while ends\n\n");