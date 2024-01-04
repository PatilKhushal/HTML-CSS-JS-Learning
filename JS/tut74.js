/* 
    This is to show OOP concepts in JS
*/

/* 
    Creating classes in JS

    syntax : class className
    {
        properties and functions
    }

    Constructors are created using constructor() function
*/

class Shape
{
    #message    // this will create a private property or field, ie; requires #before declaringrr
    giveMeSomething // this is public field/property
    constructor(length, breadth)
    {
        this.length = length;   //  this will implicitly create a property/field called length 
        this.breadth = breadth; //  this will implicitly create a property/field called breadth
    }

    // following will give an error as only one constructor can be defined
    /* constructor(raju)
    {
        this.raju = raju;
    } */

    getResult()
    {
        return [this.length, this.breadth, this.#area(), this.#perimeter()];
    }

    #area()
    {
        return this.length * this.breadth;
    }
    
    #perimeter()
    {
        return 2 * (this.length + this.breadth);
    }
}

/* let rect = new Shape();
console.log("rect");
console.log(rect);
console.log("rect.getResult()");
console.log(rect.getResult());

let recta = new Shape(10, 20);
console.log("recta");
console.log(recta);
console.log("recta.getResult()");
console.log(recta.getResult());
 */
/* 
    Inheritance
*/
class Rectangle extends Shape
{
    /* 
        if no constructor is defined hence it will implicitly call the super's constructor as follows

        constructor(...args)
        {
            super(...args);
        }

    */

    /* 
        constructor overriding

        syntax:
                constructor(parameters)
                {
                    call to super(parameters) // this is must and be on first line only else will get an error
                    remaining body
                }
    */

    constructor(...args)
    {
        /* super();    // but this will invoke simple constructor */
        super(...args);    // but this will constructor defined in parent
        this.color = args[2];
    }

    // method overriding
    getResult()
    {
        console.log("getResult of Rectangle")
        return super.getResult().concat(this.color);
    }
}

let rectangle = new Rectangle(10, 20);  // if any parameter is misssing it will implicitly add undefined in it's place
console.log("rectangle")
console.log(rectangle)
console.log("rectangle.getResult()")
console.log(rectangle.getResult())

let rectangle2 = new Rectangle(10, 20, "black", 4879);  // if any parameter is extra it will discard it automatically
console.log("rectangle2")
console.log(rectangle2)
console.log("rectangle2.getResult()")
console.log(rectangle2.getResult())