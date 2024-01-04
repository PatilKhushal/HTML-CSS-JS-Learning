/* 

    MDN refer kar bhai usme jyada accha hai thoda baho niche explain kar raha hoon

*/

let array = [10, 207, 20, 30, 40, 50, 85, 78, 84, 74, 76 ,95, 10, 23, 54, 65, 85, 41, 20, 3.14, 851, 451];

let [a, b, c, d, , , , , t, ...BachaHuaMujhme] = array; // dekh bhai hota yeh hai ki iss array mein se ek ek element utha kar a, b, .... in sab daal diya jaata hai kuch extra hua toh discard kaam hua toh problem hi nahi na 

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(t)
console.log(BachaHuaMujhme) // yeh array return krata hai 
console.log(...BachaHuaMujhme) // yeh ek ek element

let obj = {p:1, q:2, r:3, s:4, t:5, u:6, v:7, w:8, x:9, y:10, z:11}
let {p, q, r, ...BakiMujhme} = obj;
console.log(p)
console.log(q)
console.log(r)
console.log(BakiMujhme)