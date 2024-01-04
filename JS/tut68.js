/* 
    An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

    Async functions can contain zero or more await expressions.

    Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.

    The resolved value of the promise is treated as the return value of the await expression.

    Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

    
    
    iska matlab hum kisi bhi function ko async kar sakte hai aur usme marzi jitne await dal sakte hai
    await hum kabhi bhi promise ko krte hai jo hume uss promise ki resolved value return karta hai
    ek async function kabhi bhi ek promise return karta hai

    abb agar iss async mein await raha toh, woh execution ko rok deta hai jab tak woh promise fulfill na ho
    agar promise reject hui toh hum usse normal try catch block ko use karke catch bhi kar sakte hai

    async await synchronous behaviour ko janam deta hai
*/

async function anything()
{
    let p1 = new Promise(   
                            (resolve, reject) =>
                            {
                                setTimeout(() => {resolve("Successfully resolved")}, 10000);
                            }
                        )

    let result = await p1;
    
    console.log(result);
    return p1;
}

let result = anything().then(alert);

console.log(result);