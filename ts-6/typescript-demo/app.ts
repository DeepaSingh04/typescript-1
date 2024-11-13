// Variable Declarations
let num: number = 42;
let bigIntNum: bigint = 9007199254740991n;
let str: string = "Hello, TypeScript!";
let isLearning: boolean = true;

let numArray: number[] = [1, 2, 3, 4];
let strArray: string[] = ["one", "two", "three"];
let boolArray: boolean[] = [true, false, true];

// Tuple Type
let tupleExample: [number, string, boolean] = [5, "tuple", true];

// Enum Type
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;

// Any Type
let randomValue: any = "This can be any type";
randomValue = 25; // Now it's a number

// Void Type
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined Types
let u: undefined = undefined;
let n: null = null;

// Function Declarations
function addNumbers(a: number, b: number): number {
  return a + b;
}

function greetUser(name: string): string {
  return `Hello, ${name}!`;
}

// Object Types using Interfaces and Type Aliases

// Interface Example
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const person1: Person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

// Type Alias Example
type Point = {
  x: number;
  y: number;
};

const point1: Point = {
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
