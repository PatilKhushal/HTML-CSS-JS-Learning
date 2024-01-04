let loadScript = (src) =>
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>
        {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = src;
            document.head.appendChild(script);
            script.onload = () =>
            {                    
                resolve(src);
            }            
            script.onerror = () =>
            {                    
                reject(new Error("Problem in loading script!"));
            }
        }, 5000)
    })
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
.then(
        (value) => 
        {
            console.log("pehle script ki success hui hai toh yeh kaam kiya");
        })
.then(
        (value) => 
        {
            console.log("agar woh kaam bhi success hua toh yeh kaam kiya");
        }, 
        
        (error) =>
        {
            console.log(error);
        }
    )

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
.then(
        (value) => 
        {
            console.log("dusre script ki succes hui toh yeh kaam kiya");
        }, 

        (error) =>
        {
            console.log(error);
        }
    )

loadScript("https://cdn45.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
.then(
        (value) => 
        {
            console.log("Success 2 :tisre script ki success hui toh yeh kaam kiya");
        }
    )
.then(
        (value) => 
        {
            console.log("Success 3 :agar woh kaam bhi success hua toh yeh kaam kiya");
        } 
    )
.then(
        (value) =>
        {
            console.log("Success 4 : agar woh kaam bhi success hua toh yeh kaam kiya");
        }

    )
.then(
        (value) =>
        {
            console.log("Success 5 : agar woh kaam bhi success hua toh yeh kaam kiya");
        }

    )
.then(
        (value) =>
        {
            console.log("Success 6 : agar woh kaam bhi success hua toh yeh kaam kiya");
        }

    )
.then(
        (value) =>
        {
            console.log("Success 7 : agar woh kaam bhi success hua toh yeh kaam kiya");
        }

    )
.catch(
        (error) =>
        {
            console.log("bhai error aa gaya issi liye saare .then() mein error jaata raha koi handler nahi tha na internal issiliye final handler mein handle ho gya hoon");
        }
    )


/* 
        you can add multiple handlers too
*/