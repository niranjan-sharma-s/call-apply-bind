/*
call is a function that you use to change the value of this inside a function and execute it with the arguments provided.

Here is the syntax of the call function:
func.call(obj, arg1, arg2...)

func is a function that needs to be invoked with a different this object
Obj is an object or a value that needs to be replaced with the this keyword present inside the function func
arg1, arg2 are arguments that are passed to the invoking function with the changed this object.

*/

function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand) {
    Car.call(this, "Convertible", "Petrol");
    this.brand = brand;
    console.log("Car Details :", this);
}

function setPrice(price) {
    Car.call(this, "Sedan", "Diesel");
    this.price = price;
    console.log("Car Price:", this);
}

const brand = new setBrand("Audi");
const price = new setPrice(5000);

// console.log(brand ,"brand" )
// console.log(price ,"price")
