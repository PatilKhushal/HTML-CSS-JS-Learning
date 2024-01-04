// write a funtion that prints a message after 5 seconds using IIFE

/* ((name) =>
{
    setTimeout(() =>
    {
        console.log("Hello Bhai", name);
    }, 3000)
})("Khushal") */

// write a funtion that prints hello after 2s and world after 2s usinf IIFE

/* let p = async (msg) =>
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            {
                resolve(msg);
            }, 2000);
    })
}

(
    async () =>
    {
        console.log(await p("Hello"));
        console.log(await p("World"));
    }
)(); */

// write a js script to find an average of numbers in an array using spread operator

/* let a = (...arr) => 
{
    let avg = 0;
    arr.map((element) => avg += element / arr.length);

    return avg;
}

let arr = [10, 20, 30, 50, 40, 60, 70, 80, 90, 100];
console.log(a(...arr)); */

// write a js script that resolves promise after n seconds use IIFE and function takes paramter n for seconds delay

/* let p = async (msg, n) =>
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            {
                resolve(msg);
            }, n*1000);
    })
}

(
    async () =>
    {
        console.log(await p("Hello", 2));
        console.log(await p("World", 5));
        console.log(await p("Khushal", 1));
    }
)(); */

// write a simple interest calculator using closures that will take some principal and calculate interest for different set of ROI and N for same base principal

function calcInterest(principal)
{
    function calc(ROI, N)
    {
        return (principal * ROI * N) / 100;
    }

    return calc;
}

let base = calcInterest(10000);
console.log("Simple Interese with principal 10000, ROI 7 & No of Years 20", base(7, 20));
console.log("Simple Interese with principal 10000, ROI 10 & No of Years 10", base(10, 10));
console.log("Simple Interese with principal 10000, ROI 20 & No of Years 20", base(20, 20), "\n\n\n\n\n");

let base2 = calcInterest(15000);
console.log("Simple Interese with principal 15000, ROI 7 & No of Years 20", base2(7, 20));
console.log("Simple Interese with principal 15000, ROI 10 & No of Years 10", base2(10, 10));
console.log("Simple Interese with principal 15000, ROI 20 & No of Years 20", base2(20, 20));