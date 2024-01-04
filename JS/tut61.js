/* Callbacks are calling some function within a function*/

/* Here's a function that takes up a url of script and loads it in browser */
function loadScript(src) 
{
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);

    script.onload = () => {
        console.log("Success");
    }

    script.onerror = (err) => 
    {
        console.log(err);
    }
}

/* call to normal loadScript without callback */
/* loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")  // this will print success
loadScript("https://cdn.jsdelivr.net/bootstrap@5.3.2/dist/js/bootstrap.bundle..js")  // this will not print success */

/* this function generates an error that will need to be caught */

/* Now what if we want to run some function once the script is loaded? so we will need to pass the function to be called once the script loads */
function loadScript2(src, callback) 
{
    let script = document.createElement("script");
    script.src = src;
    
    script.onload = (value) => {
        callback(null, src);
    }
    
    script.onerror = (err) => 
    {
        callback(err);
        return;
    }

    document.head.append(script);
}

function grettings(err, result)
{
    if(err != null)
    {
        console.log("Sir error occured");
        return
    }
    console.log(`Sir, script ${result} is successfully loaded`);
}

loadScript2("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", grettings)  // this will print success
loadScript2("https://cdn.jsdelivr.net/bootstrap@5.3.2/dist/js/bootstrap.bundle..js", grettings)  // this will not print success


/* 
    so generally prior to promises this was the case

    they use to define such callback functions where the parameter list had an error argument a definition time

    when the functioon ran successfully it use to call the callback function by passsing null in place of error arg and handled the successs

    else used to pass the error and handled the error in callback function


    this way wrapped the successs and failure 
*/

/* 
    problem with this approach is that it 

    1. we pass directly a function 
        and if anyone just keeps the error part true if wi;; not call callback

    2. if we want to do something based on successfull running of callback, based on it's successs do something and .........
        this will create a very complex loop which is not feasible to read 

    to overcome such problems we use promises
*/