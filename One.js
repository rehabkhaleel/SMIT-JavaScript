console.log("Rehab");

let a1 = 10; //setting value of a equals to 10
console.log(a1); // printing a

//this will print the value of a which is currently set to 10
//--------------------------------------------------------------//
//Practice Exercise 2.1
let str1 = "Rehab";
let str2 = "Khaleel";
let val1 = undefined;
let val2 = null;
let myNum = 19;

console.log(typeof str1);  // Output: string
console.log(typeof str2);  // Output: string
console.log(typeof val1);  // Output: undefined
console.log(typeof val2);  // Output: object (Note: This is a known bug in JavaScript)
console.log(typeof myNum);  // Output: number

//Practice Exercise 2.2
const myName = "Rehab Khaleel";
const myAge = 19; 
const canCodeJavaScript = true; 

console.log(`My name is ${myName}. I am ${myAge} years old, and it is ${canCodeJavaScript ? 'true' : 'false'} that I can code JavaScript.`);

//Practice Exercise 2.3
// Prompt the user for the value of side 'a' and convert it to a number
const sideA = parseFloat(prompt("Enter the value of side 'a':"));

// Prompt the user for the value of side 'b' and convert it to a number
const sideB = parseFloat(prompt("Enter the value of side 'b':"));

// Check if the inputs are valid numbers
if (!isNaN(sideA) && !isNaN(sideB)) {
  // Calculate the square of 'a' and 'b'
  const aSquared = sideA ** 2;
  const bSquared = sideB ** 2;

  // Calculate the square of the hypotenuse 'c' using the Pythagorean theorem
  const cSquared = aSquared + bSquared;

  // Calculate the hypotenuse 'c' by taking the square root of 'cSquared'
  const c = Math.sqrt(cSquared);

  // Print the result to the console
  console.log(`The hypotenuse 'c' of the right-angled triangle is: ${c}`);
} else {
  console.log("Invalid input. Please enter valid numbers for sides 'a' and 'b'.");
}


//Practice exercise 2.4
let a = 10;
let b = 5;
let c = 3;

// Add b to a
a += b;

// Divide a by c
a /= c;

// Replace the value of c with the modulus of c and b
c %= b;

// Print all three numbers to the console
console.log("Updated values:");
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);


//Chapter Project 1
const distanceInMiles = 130;

// Convert miles to kilometers using the conversion factor
const distanceInKilometers = distanceInMiles * 1.60934;

// Log the result in the specified format
console.log(`The distance of ${distanceInKilometers.toFixed(4)} kms is equal to ${distanceInMiles} miles`);


//Chapter Project 2
const heightInInches = 70; // Replace with your height in inches
const weightInPounds = 150; // Replace with your weight in pounds

// Convert height to centimeters and weight to kilograms
const heightInCentimeters = heightInInches * 2.54;
const weightInKilograms = weightInPounds / 2.2046;

// Calculate BMI
const heightInMeters = heightInCentimeters / 100;
const bmi = weightInKilograms / (heightInMeters * heightInMeters);

// Output the results
console.log(`Height in inches: ${heightInInches} inches`);
console.log(`Height in centimeters: ${heightInCentimeters} cm`);
console.log(`Weight in pounds: ${weightInPounds} pounds`);
console.log(`Weight in kilograms: ${weightInKilograms.toFixed(2)} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);
