let abc = new Promise(function(resolve, reject)
{
    let choice = 'n';
    setTimeout(() => console.log('I am inside Promise'), 3000);
    resolve("Successfully Executed");
});

console.log(abc)


/* 
    promises are elegant way to wrap the callbacks and solve callback hell problem

    cause here are just two things resolve and reject 

    if resolved we can proceed further else handle error
*/