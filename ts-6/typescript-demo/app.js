// Variable Declarations
var num = 42;
var bigIntNum = 9007199254740991n;
var str = "Hello, TypeScript!";
var isLearning = true;
var numArray = [1, 2, 3, 4];
var strArray = ["one", "two", "three"];
var boolArray = [true, false, true];
// Tuple Type
var tupleExample = [5, "tuple", true];
// Enum Type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
// Any Type
var randomValue = "This can be any type";
randomValue = 25; // Now it's a number
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined Types
var u = undefined;
var n = null;
// Function Declarations
function addNumbers(a, b) {
    return a + b;
}
function greetUser(name) {
    return "Hello, ".concat(name, "!");
}
var person1 = {
    name: "Alice",
    age: 25,
    isStudent: true
};
var point1 = {
    x: 10,
    y: 20
};
// Testing
console.log("Numeric Types:", num, bigIntNum);
console.log("String Type:", str);
console.log("Boolean Type:", isLearning);
console.log("Array Types:", numArray, strArray, boolArray);
console.log("Tuple Type:", tupleExample);
console.log("Enum Type:", favoriteColor);
console.log("Any Type:", randomValue);
logMessage("This is a message logged with a void function.");
console.log("Function Add Numbers Result:", addNumbers(10, 15));
console.log("Function Greet User Result:", greetUser("Bob"));
console.log("Interface Object:", person1);
console.log("Type Alias Object (Point):", point1);
