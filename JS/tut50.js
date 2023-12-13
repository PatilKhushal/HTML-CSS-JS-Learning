let formgrp = document.body.getElementsByClassName("form-grp");

for (const key in formgrp) 
{
    console.log(formgrp[key].innerHTML + "\n\n");
}

formgrp[0].firstElementChild.style.background = "red";

let forgrp2 = document.body.querySelectorAll("input[type=text]");
for (const key in forgrp2) 
{
    if(key % 3 == 0)
        forgrp2[key].style.background = "red";
    else if(key % 2 == 0)
        forgrp2[key].style.background = "green";
    else if(key % 1 == 0)
        forgrp2[key].style.background = "blue";
}

let query = document.body.querySelectorAll(".form-grp>select>option");
for (const key in query) 
{
    console.log(query[key].innerHTML);
}