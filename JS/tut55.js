let body = document.body;
body.setAttribute("class", "flex darkMode");    // this sets the attribue to element by removing all current attribute only if specified if you want to remove attribute then use removeAttribute(), (class is attribute and value is flex darkMode)

let button = document.body.getElementsByTagName("button")[0];
button.setAttribute("class", "lightMode");

console.log("body.getAttribute(\"class\") :\t" + body.getAttribute("class"));

function toggleMode()
{
    if(button.getAttribute("class") != "darkMode") //getAttribute(attribute) gets the value of specified attribute 
    {
        body.setAttribute("class", "flex lightMode");
        button.setAttribute("class", "darkMode");
    }
    else
    {
        body.setAttribute("class", "flex darkMode");
        button.setAttribute("class", "lightMode");
    }

    console.log(body.getAttribute("class"));
}

button.removeAttribute("class");
console.log(button.getAttribute("class"));


document.body.getElementsByTagName("button")[1].setAttribute("hidden", "true");
console.log("document.body.getElementsByTagName(\"button\")[1].hasAttribute(\"hidden\") :\t" + document.body.getElementsByTagName("button")[1].hasAttribute("hidden"));

console.log("body.attributes :\t")
console.log(body.attributes)
/* will learn it futher, u were just exploring here */
/* let id;
function callMe()
{
    console.log("Called");
    id = setInterval(() => {
        button.click();
    }, 100);

    setTimeout(() => {
        clearInterval(id);
    }, 5000);
}

callMe();
 */