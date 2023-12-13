const container = document.body.getElementsByClassName("container");


/* 
    boolean matches(css) :-    
    it works on element and returns true if that element matches the passsed css statement(class / id / other selector)
*/
console.log(container);
console.log(container[0].matches(".heading1"));


/* 
    element closest(css) :-    
    it works on element and returns an element contains the passsed css statement(class / id / other selector) as ancestor
*/
const elem = document.body.querySelector(".heading1");
console.log(elem.closest(".bigcontainer"));

/* 
    boolean contains(css) :-    
    it works on element and returns true if that element contains the passed element
*/
console.log(container[0].contains(elem));