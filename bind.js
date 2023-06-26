/* 
The bind function creates a copy of a function with a new value to the this present inside the calling function.

Here is the syntax for the bind function:

func.bind(Obj, arg1, arg2, ..., argN);
Where,

func is a function that needs to be invoked with a different this object
tObj is an object or a value that needs to be replaced with the this keyword present inside the function func
arg1, arg2…argN – you can pass 1 argument to the calling function or more than that, similar to the call function.
The bind function then returns a new function that consists of a new context to the this variable present inside the calling function:

*/
function Click (count) {
    this.count = count
    console.log("count++:", count+1)
}

const incrementCount = Click.bind()
console.log(incrementCount(5))
