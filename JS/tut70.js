/* 
    dekh bhai custom error throw karna bhi usual hi hai js mein bhi

    throw new Error(reason);


    abb error ke pass 3 properties hoti hai
    error.name
    error.message
    error.stack same hai error
    aur finally bhi same hi hai isme
*/

function getAge()
{
    let age = Number.parseInt(prompt("Enter your age"));
    if(Number.isNaN(age))
        throw new Error("Chutiye age daal matlab sirf number");
    if(age <= 0 && age > 130)
        throw new Error("Invalid age hai bey chutiye");

    if(age >= 18)
        console.log("tu driving liscence bana sakta hai bey");
    else 
        console.log("tu driving liscence nahi bana sakta hai bey,  chota hai tu abhi. Sirf pogo dekh");
}

try
{
    getAge();
}
catch(error)
{
    console.log("error.name :\t" + error.name);
    console.log("error.message :\t" + error.message);
    console.log("error.stack :\t" + error.stack);
    console.log("error :\t" + error);
}