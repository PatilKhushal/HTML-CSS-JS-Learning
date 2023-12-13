/* 
    *   Child Nodes JS

*/

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

console.log(document.body.hasChildNodes());

console.log(Array.from(document.body.childNodes));

let ulArr = document.body.getElementsByTagName("ul");
console.log(ulArr)
console.log(document.body.parentElement)
console.log("\n")
console.log(document.body.parentNode)

