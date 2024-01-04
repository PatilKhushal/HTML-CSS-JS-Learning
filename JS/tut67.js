let p1 = new Promise(
    (resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve("Resolved the promise p1");
        }, 2000);
    }
);

let p2 = new Promise(
    (resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve("Resolved the promise p2");
        }, 2000);
    }
);

let p3 = new Promise(
    (resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve("Resolved the promise p3");
        }, 2000);
    }
);

let p4 = new Promise(
    (resolve, reject) =>
    {
        setTimeout(() => 
        {
            reject(new Error("Rejected the promise p4"));
        }, 500);
    }
);


/* 
    Promise.all([promise1, promise2, promise3, ......, promiseN])

    The Promise.all() static method takes an iterable of promises as input and returns a single Promise

    Promise.all() will reject immediately upon any of the input promises rejecting. ie; it won't wait for others to fulfill it will just throw that error 

    agar kisi bhi promise mein error aa jaye toh promise.all() nahi chalega
*/
let finalRes = Promise.all([p1, p2, p3]);
finalRes
.then( (result) =>
        {
            console.log("Promise.all([p1, p2, p3]) returns the following result");
            console.log(result);
        }    
)
.catch( (error) =>
        {
            console.log("Error in Promise.all([p1, p2, p3])");
            console.log(error);
        }
)

let finalRes2 = Promise.all([p4, p1, p2]);

finalRes2
.then( (result) =>
        {
            console.log("Promise.all([p4, p1, p2]) returns the following result");
            console.log(result);
        }    
)
.catch( (error) =>
        {
            console.log("Error in Promise.all([p4, p1, p2])");
            console.log(error);
        }
)


/* 
    Promise.allSettled([promise1, promise2, promise3, ......, promiseN])

    The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.

    This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise

    the promise returned by Promise.allSettled() will wait for all input promises to complete, regardless of whether or not one rejects. 
    Use allSettled() if you need the final result of every promise in the input iterable

    promise.allSettled() ek array return karta hai jisme status aur value/reason hota hai
    iska matlab agar kisi promise mein error aa bhi jaye toh result wale error mein status aur reason rahega uss akeli promise ke liye baki sab ke liye status aur value rahegi
*/

let finalRes3 = Promise.allSettled([p4,p1,p2,p3]);
/* let finalRes3 = Promise.allSettled([p4,p1,p2,p3]); */
finalRes3
.then( (result) =>
        {
            console.log("Promise.allSettled([p4, p1, p2, p3]) returns the following result");
            console.log(result);
        }    
)
.catch( (error) =>
        {
            console.log("Error in Promise.allSettled([p4, p1, p2, p3])");
            console.log(error);
        }
)


/* 
        Promise.race([promise1, promise2, promise3, ........, promiseN])
        The Promise.race() static method takes an iterable of promises as input and returns a single Promise

        thise settles to the first promise to complete no matter if it's rejected or not

        iska matlab yeh methos uss promise par settle hoti jo sabse pehle fulfill ho
        matter nahi karta woh resolve hui ya reject
*/

let finalRes4 = Promise.race([p1, p2, p3]);
finalRes4
.then( (result) =>
        {
            console.log("Promise.race([p1, p2, p3]) returns the following result");
            console.log(result);
        }    
)
.catch( (error) =>
        {
            console.log("Error in Promise.race([p1, p2, p3])");
            console.log(error);
        }
)

let finalRes5 = Promise.race([p1, p2, p3, p4]);
finalRes5
.then( (result) =>
        {
            console.log("Promise.race([p1, p2, p3, p4]) returns the following result");
            console.log(result);
        }    
)
.catch( (error) =>
        {
            console.log("Error in Promise.race([p1, p2, p3, p4])");
            console.log(error);
        }
)


/* 
        Promise.any([promise1, promise2, promise3, ..........., promiseN])

        this method is similar to PRomise.race() but it settles  to the first promise that resolves

        iska matlab yeh poori tarah se Promise.race() ki jaise hai par yeh settle sirf ussi promise par hoti hai joh sabse pehle resolve ho
        reject wali promise ignore hoti hai
*/

let finalRes6 = Promise.any([p1, p2, p3]);
finalRes6
.then( (result) =>
        {
            console.log("Promise.any([p1, p2, p3]) returns the following result");
            console.log(result);
        }    
)
.catch( (error) =>
        {
            console.log("Error in Promise.any([p1, p2, p3])");
            console.log(error);
        }
)

let finalRes7 = Promise.any([p1, p2, p3, p4]);
finalRes7
.then( (result) =>
        {
            console.log("Promise.any([p1, p2, p3, p4]) returns the following result");
            console.log(result);
        }    
)
.catch( (error) =>
        {
            console.log("Error in Promise.any([p1, p2, p3, p4])");
            console.log(error);
        }
)

/* 
        Promise.reject(reason)
        The static Promise.reject() function returns a Promise that is rejected

        yeh ek rejected promise return karta hai jiska reason humne provide kiya hota hai

*/

console.log(Promise.reject("This promise is created explicitly which is rejected"))

/* 
        Promise.resolve(value)
        The static Promise.resolve() function returns a Promise that is resolved

        yeh ek resolved promise return karta hai jiski value humne provide kii hoti hai
*/

console.log(Promise.resolve("This promise is created explicitly which is resolved"))
console.log(Promise.resolve(new Error("Raju")))