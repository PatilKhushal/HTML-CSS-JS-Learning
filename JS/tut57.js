function fetchResult()
{
    document.body.classList.toggle("darkMode");
    document.body.getElementsByTagName("button")[0].classList.toggle("darkMode");
    document.body.getElementsByTagName("button")[1].classList.toggle("darkMode");
    document.body.getElementsByTagName("textarea")[0].classList.toggle("darkMode");
    
    document.body.getElementsByTagName("textarea")[0].textContent = document.body.classList;
}

document.body.className = "flex";
document.body.getElementsByTagName("button")[0].classList.add("lightMode");
document.body.getElementsByTagName("button")[1].classList.add("lightMode");
document.body.getElementsByTagName("textarea")[0].classList.add("lightMode");

console.log(document.body.getElementsByTagName("button")[1].classList);
document.body.getElementsByTagName("button")[1].classList.remove("lightMode");


/* 
    className
    we can use className to add classNames directly

    classList
    we get list of all classes in an element using classList
    we can add, remove, toggle particular class as above



    methods of classList : add("list of classes"), remove("list of classes"), replace("class to replace", "class to replace with"), and toggle("list of classes", optional condition) methods.

    You can test whether the element contains a given class using the classList.contains("list of classes") method.
*/
