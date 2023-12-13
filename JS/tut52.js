let elem = document.body.getElementsByTagName("nav");
elem[0].firstElementChild.style.color = "red";

elem = document.body.getElementsByTagName("ul");
elem[0].firstElementChild.style.color = "green"
elem[0].lastElementChild.style.color = "green"

elem = document.body.getElementsByTagName("li")
Array.from(elem).forEach(element => 
    {
        element.style.color = "cyan";
    });