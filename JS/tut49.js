let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log("t.rows");
console.log(t.rows);
console.log("t.tHead");
console.log(t.tHead);
console.log("t.tCaption");
console.log(t.tCaption);
console.log("t.tFoot");
console.log(t.tFoot);
let arr = t.tBodies[0].rows;

console.log("Table Begins");
/* for (const key in arr) 
{
    console.log(arr[key].cells)
    console.log("\n\n");
}
 */
for (const key in arr) 
{
    for (const elem in arr[key].cells) 
    {
        console.log(arr[key].cells[elem].innerHTML + "\t")
    }
    console.log("\n\n");
}

console.log("Table Begins\n");
console.log(arr)