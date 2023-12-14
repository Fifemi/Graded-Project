//a simple loop inside a function that takes an array and prints the value of the array to the console
function arrayValues (myArray) {
    for (let i= 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

//an example
let myArray = [100, 200, 300, 400, 500, 600];
arrayValues(myArray);
