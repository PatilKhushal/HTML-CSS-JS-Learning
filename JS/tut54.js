console.log(document.body.getElementsByClassName("container")[0]);  //returns element
console.dir(document.body.getElementsByClassName("container")[0]);  //returns object

console.log(document.body.firstChild.nodeName); // returns name of element
console.log(document.body.firstChild.tagName);  // if not element then will be undefined
console.log(document.body.firstElementChild.tagName);  // returns tag name
console.log(document.body.firstElementChild.nodeName);  // returns node name

/* 
    * innerHTML and outerHTML is valid only for element nodes
    * you can update that node using innerHTML and outerHTML too
    * for other types of node like text and comment use data or nodeValue method
*/
console.log(document.body.getElementsByClassName("container")[0].firstElementChild.innerHTML);
document.body.getElementsByClassName("container")[0].firstElementChild.innerHTML = "<h1>I am changed</h1>";
console.log(document.body.getElementsByClassName("container")[0].firstElementChild.innerHTML);

console.log(document.body.getElementsByClassName("container")[0].firstElementChild.outerHTML);
document.body.getElementsByClassName("container")[0].firstElementChild.outerHTML = "<h1>I am changed</h1>";
console.log(document.body.getElementsByClassName("container")[0].firstElementChild.outerHTML);



console.log(document.body.firstChild.data = "@author Patil Khushal Suresh");
console.log(document.body.firstChild.data = "@author Patil Khushal Suresh");

console.log(document.body.getElementsByClassName("container")[0].textContent);  // gives all the text in element

document.body.getElementsByClassName("container")[0].children[5].hidden = false;
document.body.getElementsByClassName("container")[0].children[8].hidden = true;