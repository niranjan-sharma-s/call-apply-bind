/*
The Apply function is very similar to the Call function. The only difference between call and apply is the difference in how arguments are passed.

In apply, arguments you can pass an argument as an array literal or a new array object.

Here is the syntax for the apply function:
func.apply(Obj, [agr1, arg2,...])

func is a function that needs to be invoked with a different this object
thisObj is an object or a value that needs to be replaced with the this keyword present inside the function func
argumentsArray can be an array of arguments, array object, or the arguments keyword itself.
 */

function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
    console.log("Car constructor called");
};

function setBrand(brand) {
    Car.apply(this, ["Convertible", "Petrol"])
    this.brand = "brand"
    console.log("Car Brand :", this)
}

function setPrice(price) {
    Car.apply(this, ["Sedan", "Diesel"])
    this.price = price
    console.log("Car Price :", this)
}

const brand = new setBrand("Audi")
const price = new setPrice(5000)