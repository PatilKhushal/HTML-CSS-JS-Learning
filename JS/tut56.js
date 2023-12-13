/* 
    Syntax : insertAdjacentElement(position, element)

    positions are which are case insensitive :

    'beforebegin': Before the targetElement itself.
    'afterbegin': Just inside the targetElement, before its first child.
    'beforeend': Just inside the targetElement, after its last child.
    'afterend': After the targetElement itself.

    returns the inserted element or null
*/

first.insertAdjacentHTML("beforebegin", "<h1> hello, i am Before Begin </h1>");
first.insertAdjacentHTML("afterbegin", "<h1> hello, i am After Begin </h1>");
first.insertAdjacentHTML("beforeend", "<h1> hello, i am Before End </h1>");
first.insertAdjacentHTML("afterend", "<h1> hello, i am After End </h1>");

function delnode() 
{
    first.remove();    
}