/* 
    Dekh bhai try catch yaha par bhi apna wala usual hi hai
*/

try
{
    console.log(Khushal);
}
catch(err)
{
    console.log("abb dekh try mein tune Khushal use kiya par usse kabhi declare hi nahi kiya issi-liye error aaya");
    console.log(err);
}

/* 
    abb iss upar wali chiz se tum toh wakif ho
    ann niche wali chiz par dhyan do
*/


try
{
    setTimeout(() =>
    {
        console.log(Khushal);
    }, 2000)
}
catch(err)
{
    console.log(err);
}


/* 
    abb dekh abb try catch mein tune setTimeout use kiya hai 
    par setTimeout tune bilkul sahi use kiya hai uske use mein koi galati nahi hai issilye woh setTimeout schedule ho gaya

    abb 2sec baad error aaya na ki bhai tune toh Khushal ko declare hi nahi kiya use kaise kar raha hai
    arthat present mein nah future mein aaya
    issi-liye try-catch wale handler ne iss error ko handle nahi kiya 

    ha par tu agar uss Khushal ke use ko try-catch mein wrap krta setTimeout ke andar toh future mein jab woh script execute hoti tab uske paas ek handler hota jo uss error ko handle kr leta

    finally ek outer try-catch scheduled script ke error ko handle nahi kar sakte 
    usse handle karne hetu inner try-catch jaruri hai
*/