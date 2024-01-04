// Answer to first question

/* function loadScript(src)
{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.head.append(script);

        script.onload = () => 
        {
            resolve("Loaded :\t" + src);
        }

        script.onerror = () =>
        {
            reject("Error loading script");
        }

    });
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
.then(alert)
.catch(alert)

loadScript("https://cdn.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
.then(alert)
.catch(alert) */


// Answer to second question


/* function loadScript(src)
{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.head.append(script);

        script.onload = () => 
        {
            resolve("Loaded :\t" + src);
        }

        script.onerror = () =>
        {
            reject("Error loading script");
        }

    });
}

let a = async (src) => 
{
    let b = await loadScript(src);
    return b;
}

a("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js").then(alert);
a("https://cdn.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js").then(alert, alert); */


// Answer to third question

/* function abc()
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>
        {
            reject("Rejected the promise");
        }, 3000)
    })
}

let result = async () =>
{
    try
    {
        let res = await abc();
        console.log(res);
    }
    catch(error)
    {
        console.log(error)
    }
}

result(); */

// Answer to fourth question

async function fourth()
{
    let p1 = () => 
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Resolved Promise p1");
            }, 5000);
        });
    }
    
    let p2 = () => 
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Resolved Promise p2");
            }, 5000);
        });
    }
    
    let p3 = () => 
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Resolved Promise p3");
            }, 5000);
        });
    }
    
    console.log("Beginning await one by one")
    console.log(new Date().getSeconds());
    await p1();
    await p2();
    await p3();
    console.log(new Date().getSeconds());
    console.log("Ending await one by one")


    console.log("Beginning await Promise.all()")
    console.log(new Date().getSeconds());
    await Promise.all([p1(), p2(), p3()]);
    console.log(new Date().getSeconds());
    console.log("Ending await Promise.all()")
}

fourth();