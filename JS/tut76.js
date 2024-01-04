/* 
    An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
    Syntax :
            (
                function () 
                {
                    body
                }
            )();
            
            (
                () =>
                {
                    body
                }
            )();

            (
                async () =>
                {
                    body
                }
            )();
*/

let getPromise = () => 
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("A promise that is resolved");
        }, 3000);
    })
}

// abb bhai agar tujhe yeh promise chahiye 3 bar chahiye woh bhi rukk rukk kr toh tu bina IIFE ke kuch aaise karega

let b = async () =>
{
    console.log("B ka result shuru");
    let c = await getPromise();
    console.log(c);
    let d = await getPromise();
    console.log(d);
    let e = await getPromise();
    console.log(e);
    console.log("B ka result khatam");
}

await b();

// ab dekh yeh b bina kaam ke create kiya na tune toh

// toh tu IIFE ka use karke uss code ko immediately invoke kar sakta hai aur koi variable banane ki zaruruat bhi nahi padegi

(async () =>
{
    console.log("IIFE ka result shuru");
    let c = await getPromise();
    console.log(c);
    let d = await getPromise();
    console.log(d);
    let e = await getPromise();
    console.log(e);
    console.log("IIFE ka result khatam");
})()