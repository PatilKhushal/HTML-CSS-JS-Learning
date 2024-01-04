let city = prompt("Enter city name")
let a = fetch(`https://goweather.herokuapp.com/weather/${city}`);
a.then((value) => 
{
    console.log(value);
    return value.json();
}).then((result) => 
{
    console.log(result);
});