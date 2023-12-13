/* 
    * Map Reduce Filter in JS *

        * Map : map(callback(value, index, array))
            1. parameters is callback function
                - callback returns value after performing desired operation you want 
                - has parameters like value, index, array on which callback is called
            2. returns a new array by performing desired operation you want with the help of callback
            
        * Filter : filter(callback(value, index, array))
            1. parameters is callback function
                - callback returns value after it passes the condition set by you 
                - has parameters like value, index, array on which callback is called
            2. returns a new array by performing desired operation you want with the help of callback
        
        * Reduce : reduce(callback(previousVal, currentVal, currentIndex), initialVal)
            1. parameters is callback function and initial value
                - callback returns a value after processing operation mentioned by you
                - has parameters like previousVal, currentVal, currentIndex
                - previousVal is 0th element & currentVal is 1st element if initialVal is not given else as given the initial is currentVal and currentIndex - 1 is previousVal  
                - return of first iteration will be previousVal for second iteration and currentIndex will increment so will CurrentVal
            2. returns a single val after performing operation on all values of array
*/


let arr = [145, 278, 341, 445, 566, 618, 720, 80, 91, 10];
console.log("arr :\t" + arr);


let arr2 = arr.map((element)=>
{
    if(element % 2 == 0)
        return element + " divisible by 2\t";
    
    return element + " indivisible by 2\t";
});

console.log("arr2 :\t" + arr2 + "\n\n\n\n")

let numGreaterThan500 = arr.filter((element) =>
{
    if(element > 500)
        return element;
});

console.log("numGreaterThan500 :\t" + numGreaterThan500);


let res = arr.reduce((element) =>
{
    console.log("element :\t" + element);
    if(element % 5 != 0)
        return element + 1;
    return element + 2;
});

console.log(res);