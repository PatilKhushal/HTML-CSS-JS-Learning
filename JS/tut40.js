/* 
    * Strings in JS
        it's an iterable hence can be used for of
        they are immutable hence any method used will only return other string won't change the original one
*/

let myName = "        Patil Khushal Suresh        ";
console.log("for of begins")
for(let i of myName)
console.log(i)
console.log("for of ends\n\n\n");

console.log("for each begins")
Array.from(myName).forEach(element => {
    console.log(element)
});
console.log("for each ends\n\n\n")

myName = myName.trimStart();
console.log(myName)

myName = myName.trimEnd();
console.log(myName)

myName = "        " + myName + "         "
console.log(myName)

myName = myName.trim()
console.log(myName)

console.log(myName.length);
console.log(myName.at(-5)); // works on both +ive and -ive index
console.log(myName.charAt(6)); // works only on +ive

console.log(myName.substring(5)); // from 5 to end
console.log(myName.substring(5, 10)); // from 5 to end - 1

console.log(myName.toLowerCase())
console.log(myName.toUpperCase())

console.log(myName.replace("Khushal", "Unnati"))
console.log(myName.replace("khushal", "Unnati")) // won't change as replace is case sensitive

for(let i of myName.split(' '))
    console.log(i)


console.log(myName.indexOf("K"))
console.log(myName.indexOf("k")) // if not present returns -1
console.log(myName.toLowerCase().indexOf("k"))

console.log(myName.includes("Patil"))
console.log(myName.includes("patil"))

