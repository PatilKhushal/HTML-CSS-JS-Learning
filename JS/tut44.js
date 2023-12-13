/* 
    * Console Object in Html
*/

console.log("Hello World");
console.error("Error in Red Color");
console.warn("Warning in Yellow Color");
console.info("Information");
console.time("Total time taken by loop :\t");
for(let i = 0; i < 1000; i++);
console.timeEnd("Total time taken by loop :\t")

let obj = {
    Father : 
    {
        name : "Patil Suresh Sitaram",
        DOB : "7/3/----"
    },
    Mother : 
    {
        name : "Patil Bharati Suresh",
        DOB : "27/9/----"
    },
    Me : 
    {
        name : "Patil Khushal Suresh",
        DOB : "28/2/2003"
    },
    Sister : 
    {
        name : "Patil Unnati Suresh",
        DOB : "12/12/2004"
    }
}

console.table(obj);
if(confirm("Clear the console!?"))
    console.clear();

alert("End of the program");
