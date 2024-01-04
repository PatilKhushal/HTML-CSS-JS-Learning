let a = {
    'firstName' : 'Khushal',
    'middleName' : 'Suresh',
    'lastName' : 'Patil',
}

let raju = {
    'Eve' : 'Hanuman Jayanti'
}
let aju = {
    've' : 'Hanuman Jayanti'
}
let ju = {
    'e' : 'Hanuman Jayanti'
}
let u = {
    'evE' : 'Hanuman Jayanti'
}
let kaju = {
    'ev' : 'Hanuman Jayanti'
}

u.__proto__ = kaju;
raju.__proto__ = aju;
aju.__proto__ = ju;
ju.__proto__ = u;

a.__proto__ = raju;

console.log(a.Eve);
console.log(a.ve);
console.log(a.e);
console.log(a.evE);
console.log(a.ev);