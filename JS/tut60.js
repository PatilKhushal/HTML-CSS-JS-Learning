setInterval(() =>
{
    let dte = new Date();
    let sec1 = Math.floor(dte.getSeconds() / 10);
    let sec2 = Math.floor(dte.getSeconds() % 10);

    let min1 = Math.floor(dte.getMinutes() / 10);
    let min2 = Math.floor(dte.getMinutes() % 10);

    let hrs1 = Math.floor(dte.getHours() / 10);
    let hrs2 = dte.getHours() % 10;

    document.body.getElementsByClassName("box")[0].innerHTML =  hrs1;
    document.body.getElementsByClassName("box")[1].innerHTML =  hrs2;

    document.body.getElementsByClassName("box")[2].innerHTML =  min1;
    document.body.getElementsByClassName("box")[3].innerHTML =  min2;


    document.body.getElementsByClassName("box")[4].innerHTML =  sec1;
    document.body.getElementsByClassName("box")[5].innerHTML =  sec2;
}, 1000);