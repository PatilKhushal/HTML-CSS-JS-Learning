/* 
    *   Arrays in JS
        iterables 
        mutable 
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for(let i of arr)
    console.log(i)

arr[0] = 145;   // overrriden 0th element
console.log("arr[0] = 145 :\t" + arr);

arr.push(879)   // appends
console.log("Pushed 879 :\t" + arr);

console.log("arr.length :\t" + arr.length);
delete arr[0];
console.log("delete arr[0] :\t" + arr); // don't remove the element by does the place vacant
console.log("arr.length :\t" + arr.length);

arr.concat(arr) // returns a new array without modifying existing one
console.log("arr.concat(arr) :\t" + arr)
arr = arr.concat(arr)
console.log("arr = arr.concat(arr) :\t" + arr)

console.log(arr.slice(2))
console.log(arr.slice(2, 10))

arr.splice(2, 1, 745, 478, 198, 852, 753, 842, 651, 951)        // splice(Start, deleteCountFromStart, elements to be added with separated ,)
console.log("arr.splice(2, 1, 745, 478, 198, 852, 753, 842, 651, 951) : \t" + arr)

arr.sort()

console.log(arr) // sorts as string ergo alphabetically by default, can be passed a callback function to decide how to sort


arr.sort((element1, element2) =>
{
    return element1 - element2;
    // sorting is inplace and such way that element1 is sorted first then element 2
    // 0 means equal
    // +ive means number is higher
    // -ive means number is lower
});

console.log(arr);

arr.sort((element2, element1) =>
{
    return element1 - element2; // or element 2 - element 1 by keeping parameter as (elem1, elem2)
    // sorting is inplace and such way that element1 is sorted first then element 2
    // 0 means equal
    // +ive means number is higher
    // -ive means number is lower
});

console.log(arr);



