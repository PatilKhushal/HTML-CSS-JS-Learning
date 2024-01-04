/* 
    getters and setters are used to set and get values of the fields of class
    Getter and setter methods are widely used to access and manipulate the values of class fields.
*/

class Shape
{
    #length // private field
    breadth

    constructor(length, breadth)
    {
        this.#length = length;
        this.breadth = breadth;
    }

    get length()
    {
        return this.#length;
    }
    
    set length(length)
    {
        this.#length = length;
    }
    
    set breadth(breadth)
    {
        this.breadth = breadth;
    }
}

let a = new Shape(10, 20)
console.log(a);
console.log(a.length);  // can't get the private field value directly hence will use getter
a.length = 1
console.log(a.length);  // can't get the private field value directly hence will use getter
console.log(a.breadth);  // as it's public its can be accessed

/* 
    Bad practices in Getters and Setters

    1.  Using getter and setter for the variable that is declared as public.
        dekh bhai agar fields public hai toh getter aur setter use kyo karna woh toh waise bhi aacess kar sakta hai na tu 
        issiliye humesha private banaya karo fileds ko aur getter aur setter define kar diya karo


    2.  Using an object reference in the setter method.
        abb dekh bhai agar tu setter mein reference use kar raha hai jaise ki niche diaya gaya hai

        set arr(newArr)
        {
            this._arr = newArr;
        }

        isme problem yeh hai ki tu pass karega ek array jo ki hai reference type
        abb bahar se hi tune uss pass kiye gaye array ki value change kar di toh tere class ke field mein bhi change ho jayega
        aur yeh bina setter ko invoke kiye ho gaya na issilye agar reference type pass kar raha hia toh usse directly mat use kr
        deepcopy banaya karo
    
    3.  Returning an object reference in the getter method. 
        abb dekh bhai agar tu reference ko hi return kar dega toh kuch aise
        get arr()
        {
            return this._arr;
        }

        isme dikkat yeh hai ki agar iss returned array mein kuch changes kiye toh woh sidha class ke field mein reflect hoga 
        phirse bina setter ko invoke kiye issilye retun bhi deepcopy hi kiya karo
*/