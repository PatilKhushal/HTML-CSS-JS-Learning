/* 
    *   Functions in JS

        standard syntax :
        fuction functionName(optional parameter list)
        {
            body
            optional return type;
            [can return any type of data]
            [for multiple cases too you can return multiple type data i.e; for each case return different data]
        }

        lambda way

        var = (parameters) => {
            body
            optional return type;
            [can return any type of data]
            [for multiple cases too you can return multiple type data i.e; for each case return different data]
        }

        in lamdba way the variable will act like a function
*/

function greetings()
{
    console.log("System Hello to the User");
}

greetings();

let greet = (userName) =>
{
    console.log(`System Hello to ${userName}`);
}

greet("Patil Khushal Suresh")