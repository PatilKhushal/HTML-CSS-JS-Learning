let dynamicColor = () =>
{
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    /* elem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; */
    document.body.style.backgroundColor = `rgb(${blue}, ${red}, ${green})`;
}
document.body.getElementsByTagName("button")[0].onclick = ()=>console.log('JS ch function chalat aahe aata');

let elem = document.body.getElementsByClassName("container")[0];


elem.addEventListener('click', dynamicColor)

elem.addEventListener('mouseleave', function (event)
{
    document.body.style.backgroundColor = "black";
    this.style.padding = "200px 200px";
    console.log(event);
}) 

setInterval(() => 
{
    elem.click();
    console.log("success");
}, 1000)

document.body.addEventListener('mousemove', (event) =>
{
    elem.style.left = event.clientX + "px";
    elem.style.top = event.clientY + "px";

    console.log(event.screenX + " " + event.screenY);   
})


setTimeout(() =>
{
    /* window.location.href = "https://google.com"; */
    let url = "https://google.com";
    window.open(url);   

    /* syntax of window.open(url, target); */
}, 30000)
