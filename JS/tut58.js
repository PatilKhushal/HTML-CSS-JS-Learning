/* 
    setTimeout : runs once after some delay
    Syntax : setTimeout(function, delay, optional paramters any number)
    returns a timerId which is useful for       clearTimeout(timerId);
    
    
    setInterval : runs every n delay seconds as specified
    Syntax : setInterval(function, delay, optional paramters any number)
    returns a timerId which is useful for       clearInterval(timerId);


*/

setTimeout(() => alert("Loop is beginning"), 5000);

setTimeout(() => 
{
    id1 = setInterval(() => document.body.classList.toggle("darkMode"), 100);
    setTimeout(() => 
    {
        clearInterval(id1);    
    }, 10000);
}, 5200);

setTimeout((a, b, c, d) => console.log(a + b + c + d), 2000, 10, 20, 30);
setTimeout((a, b, c, d) => console.log(a + b + c + d), 2000, 10, 20, 30, 40);
setTimeout((a, b, c, d) => console.log(a + b + c + d), 2000, 10, 20, 30, 40, 50);