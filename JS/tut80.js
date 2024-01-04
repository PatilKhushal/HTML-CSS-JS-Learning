let a = () => console.log("hello")  // valid can skip braces for single line
a();

let b = name => console.log("Hello bhai", name);  // valid can skip prenthesis for single args but not for more or 0
b("Khushal");

let c = (name, age) =>              // for multiple params or no params parenthesis is necessary
{   
    console.log("Hello bhai", name);
    if(age < 1 || age > 120)
        console.log("Chutiye tu exist bhi karta hai?");   
    else if(age >= 50)
        console.log("Tu buddha ho raha hai");
    else if(age > 30 && age < 50)
        console.log("Tu middle aged hai");
    else
        console.log("Tu toh abhi jawan hai bey");
} 
c("Khushal", 20);

let obj = {
    name : "Khushal",
    show : function()
    {
        console.log("Obj mein ho tum abb")
        console.log(this.name);
        let raju = this.name;
        function r()
        {
            console.log(raju)
            /* console.log(this.name); */   // error
            function j()
            {
                console.log(raju);
                /* console.log(this.name); */   // error
            }
            j();
        }
        r();
    }
}

/* 
    abb dekh bhai standard functions ka kya hai na jab bhi woh object mein declare hote hai tab woh this obj ko refer karte hai
    par agar usme inner function declare ho gaye toh unka this change ho jaata hai isilye woh object ki property access nahi kar paate

    confuse matt ho function apne parent ki property ko aaram se refer kar paata hai par this alag hai

    abb isse fix arrow function se kar sakte hai
*/

obj.show();


let obj2 = {
    name : "Khushal",
    show : function()
    {
        console.log("Obj2 mein ho tum abb")
        console.log(this.name);
        (() =>
        {
            console.log(this.name);
            (() =>
            {
                console.log(this.name);
            })()
        })()
    }
}


/* 
    arrow function humesha this apne parent se refer karte hai jiise lexical this kaha jaata hai
*/
obj2.show();