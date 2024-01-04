/* 
    let abc be a promise 
    Note : in real scenes we don't know if promises will be resolved or rejected
*/
let abc = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("got the audio file for abc promise");
  }, 8000);
});

/* 
    let pqr be a promise 
    Note : in real scenes we don't know if promises will be resolved or rejected
*/
let pqr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Error in promise fulfillment of pqr promise"));
  }, 5000);
});

console.log("abc initial state ")
console.log(abc);
console.log("pqr initial state ")
console.log(pqr);

setTimeout(() => 
{
    console.log("abc final state ")
    console.log(abc);
    console.log("pqr final state ")
    console.log(pqr);
}, 10000);


/* handling the success or error in those promises */

/* 
    whatever the result the promise gives that can be handled the following way

    .then(
            (value) => {},      // this will handle further procedure
            (error) => {}       // this will handle any error generated
        )

    this is use to handle only errors
    .catch(
                (error) => {}   // handle error
    )
*/
abc.then((value) => 
{
    console.log("Success of ABC")
});



pqr.then(
            (value) =>
            {
                console.log("Success of PQR");
            }, 
            
            (error) =>
            {
                console.log(error);
            }
        )
