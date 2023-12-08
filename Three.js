// Step 1: Create a variable for the max value
let maxValue = 5;

// Step 2: Generate a random number for the solution
let solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution: " + solution); // Comment out in the final version

// Step 3: Create a variable for tracking whether the answer is correct
let isCorrect = false;

// Step 4: Use a while loop to iterate a prompt asking the user to guess a number
while (!isCorrect) {
    // Prompt the user to enter a number between 1 and maxValue
    let userGuess = prompt("Guess a number between 1 and " + maxValue + ":");

    // Convert the response into a number
    userGuess = parseInt(userGuess);

    // Step 5: Check if the user's guess is equal to the solution number
    if (userGuess === solution) {
        isCorrect = true;
        console.log("Congratulations! You guessed the correct number: " + solution);
    } else {
        // Provide feedback on whether the guess was high or low
        if (userGuess > solution) {
            console.log("Too high! Try again.");
        } else {
            console.log("Too low! Try again.");
        }
    }
}
//-----------------------------------------------------------------//
// Step 1: Set the starting counter to 0
let counter7 = 0;

// Step 2: Create a variable, step, to increase your counter by
let step = 10;

// Step 3: Add a do-while loop to increment the counter by the step amount each loop
do {
  // Print the counter to the console
  console.log("Counter: " + counter7);

  // Increment the counter by the step amount
  counter7 += step;

} while (counter7 < 100); // Step 4: Continue to loop until the counter is equal to 100 or more

// Output a final message after the loop completes
console.log("Counter reached 100 or more. Loop completed.");
//--------------------------------------------------------------//
// Step 1: Setup a blank array, myWork
let myWork = [];

// Step 2-6: Using a for loop, create a list of 10 objects with alternating true/false status
for (let i = 1; i <= 10; i++) {
  // Step 3: Use a ternary operator to set up alternating true/false status
  let status = i % 2 === 0 ? false : true;

  // Step 4: Create a lesson using a temporary object variable
  let lesson = {
    name: 'Lesson ' + i,
    status: status
  };

  // Step 5: Push the objects to the myWork array
  myWork.push(lesson);
}

// Step 6: Output the array to the console
console.log(myWork);
//-------------------------------------------------------//
// Step 1: Create an empty array, myTable, to hold the table data
let myTable = [];

// Step 2: Set variable values for the number of rows and columns
let numRows = 3; // Change this value to control the number of rows
let numColumns = 4; // Change this value to control the number of columns

// Step 3: Set up a counter variable with an initial value of 0
let counter2 = 0;

// Step 4: Create a for loop to construct each row of the table
for (let row = 0; row < numRows; row++) {
  // Set up a new temporary array to hold each row of data
  let tempTable = [];

  // Step 5: Nest a second loop to count the columns
  for (let col = 0; col < numColumns; col++) {
    // Step 6: Increment the main counter each iteration of the inner loop
    counter2++;

    // Step 7: Push the counter values to the temporary array
    tempTable.push(counter2);
  }

  // Step 8: Push the temporary array to the main table
  myTable.push(tempTable);
}

// Step 9: Output the table to the console
console.table(myTable);
//------------------------------------------------------------------------//
// Step 1: Create a grid array variable
let grid = [];

// Step 2: Set a value of 64 for the number of cells
let totalCells = 64;

// Step 3: Set a counter to 0
let counter = 0;

// Step 4: Create a global variable to be used for the row array
let rowArray = [];

// Step 5: Create a loop to iterate up to the number of cells you want in the array
for (let i = 0; i <= totalCells; i++) {
  // Step 6: Add an outer if statement to check if the counter is divisible by the number of columns
  if (counter % 8 === 0) {
    // Step 7: Inside the preceding if statement, check if the row is undefined
    if (rowArray !== undefined) {
      // Add the row to the main grid array
      grid.push(rowArray);
    }
    // Step 8: Clear the row array if the counter is divisible by the number of columns
    if (counter % 8 === 0) {
      rowArray = [];
    }
  }

  // Step 9: Increment the main counter by 1
  counter++;

  // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array
  let tempValue = counter;
  rowArray.push(tempValue);

  // Step 11: Check if the value of the counter is equal to the total number of columns
  if (counter === 8) {
    // Add the current row to the grid
    grid.push(rowArray);
  }
}

// Step 12: Output the grid into the console
console.log(grid);
//-----------------------------------------------------//
// Step 1: Create an empty array
let myArray = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
  myArray.push(i + 1);
}

// Step 3: Log the array into the console
console.log("Array:", myArray);

// Step 4: Use the for loop to iterate through the array
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log("Element at index", i, ":", myArray[i]);
}

// Step 5: Use the for...of loop to output the value from the array
console.log("Using for...of loop:");
for (let value of myArray) {
  console.log("Value:", value);
}
//----------------------------------------------------------//
// Step 1: Create a simple object with three items
let myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
  };
  
  // Step 2: Using the for...in loop, get the properties' names and values from the object
  console.log("Object properties and values:");
  for (let prop in myObject) {
    console.log(prop + ":", myObject[prop]);
  }
  
  // Step 3: Create an array containing the same three items
  let myArray1 = ["Value 1", "Value 2", "Value 3"];
  
  // Using the for...of loop to output the values from the array
  console.log("\nArray values:");
  for (let value of myArray1) {
    console.log("Value:", value);
  }
//-------------------------------------------------------//
// Step 1: Set up a string variable to use as output
let output = "";

// Step 2: Select a number to skip and set that number as a variable
let skipNumber = 3;

// Step 3: Create a for loop that counts to 10
for (let i = 1; i <= 10; i++) {
  // Step 4: Add a condition to check if the value of the looped variable is equal to the number that should be skipped
  if (i === skipNumber) {
    // Step 5: If the number is to be skipped in the condition, continue to the next number
    continue; // Change this to 'break' in Step 8 to see the difference
  }

  // Step 6: As you iterate through the values, append the new count value to the end of the main output variable
  output += i + " ";
}

// Step 7: Output the main variable after the loop completes
console.log("Output:", output);

// Step 8: Reuse the code, but change 'continue' to 'break' and see the difference
output = ""; // Reset the output variable
for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break; // Change this from 'continue' to 'break'
  }
  output += i + " ";
}

console.log("Output with break:", output);
//-----------------------------//
// Step 1: Set up a blank array to contain the final multiplication table
let multiplicationTable = [];

// Step 2: Set a value variable to specify how many values you want to multiply
let maxValue6 = 5; // Change this value to control the size of the table

// Step 3: Create an outer for loop to iterate through each row
for (let i = 1; i <= maxValue6; i++) {
  // Create a temporary array to store the row values
  let tempRow = [];

  // Step 4: Add an inner for loop for the column values
  for (let j = 1; j <= maxValue6; j++) {
    // Step 5: Push the multiplied row and column values to the temp array
    tempRow.push(i * j);
  }

  // Add the temporary row data to the main array of the final table
  multiplicationTable.push(tempRow);
}

// Output the multiplication table to the console
console.log("Multiplication Table:");
console.table(multiplicationTable);
//---------------------------------------------------------//
// Step 1: Create a function that takes two parameters, adds them together, and returns the result
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Step 2: Set up two different variables with two different values
  let variable1 = 5;
  let variable2 = 10;
  
  // Step 3: Use your function on the two variables and output the result using console.log
  let result1 = addNumbers(variable1, variable2);
  console.log(`Result of adding ${variable1} and ${variable2}: ${result1}`);
  
  // Step 4: Create a second call to the function using two more numbers as arguments
  let variable3 = 8;
  let variable4 = 3;
  let result2 = addNumbers(variable3, variable4);
  console.log(`Result of adding ${variable3} and ${variable4}: ${result2}`);
//----------------------------------------------------------------------//
// Step 1: Create an array of descriptive words
let descriptiveWords = ["awesome", "creative", "joyful", "energetic", "vibrant"];

// Step 2: Create a function that contains a prompt asking the user for a name
function generateRandomGreeting() {
  // Prompt the user for a name
  let userName = prompt("Please enter your name:");

  // Step 3: Select a random value from the array using Math.random
  let randomWordIndex = Math.floor(Math.random() * descriptiveWords.length);
  let randomWord = descriptiveWords[randomWordIndex];

  // Step 4: Output into the console the prompt value and the randomly selected array value
  console.log(`Hello, ${userName}! You are ${randomWord}.`);
}

// Step 5: Invoke the function
generateRandomGreeting();
//-----------------------------------------------------------//
// Step 1: Set up two variables containing number values
let num1 = 10;
let num2 = 5;

// Step 2: Set up a variable to hold an operator, either + or -
let operator = '+';

// Step 3: Create a function that retrieves the two values and the operator string value
function calculate(num1, num2, operator = '+') {
  // Use a condition to check if the operator is + or - and perform the calculation accordingly
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else {
    // If not presented with a valid operator, default to addition
    console.log("Invalid operator. Defaulting to addition.");
    return num1 + num2;
  }
}

// Step 4: Within console.log(), call the function using your variables and output the response to the console
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);

// Step 5: Update the operator value to be the other operator type and call the function again
operator = '-';
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);
//--------------------------------------------------------------------------//
// Step 1: Set up an empty array to store the values that will be calculated within the loop
let resultsArray = [];

// Step 2: Create a loop that runs 10 times, incrementing by 1 each time
for (let i = 0; i < 10; i++) {
  // Create two values each iteration
  let value1 = i * 5;
  let value2 = i * i;

  // Step 3: Create a function that returns the value of the two parameters added together
  function calculateAndReturn(value1, value2) {
    return value1 + value2;
  }

  // Step 4: Within the loop, call the calculation function, passing in the two values
  // and store the returned result in a response variable
  let result = calculateAndReturn(value1, value2);

  // Step 5: Push the result values into the array as it iterates through the loop
  resultsArray.push(result);
}

// Step 6: After the loop is complete, output the value of the array into the console
console.log("Results Array:", resultsArray);
//--------------------------------------------------------------//
// Step 1: Create a variable value with let and assign a string value of 1000 to it
let value = '1000';

// Step 2: Create an IIFE function and print the local value to the console
(function() {
  // Assign a new value to a variable of the same name within the function scope
  let value = 'IIFE Function';
  // Print the local value to the console
  console.log(value);
})();

// Step 3: Create an IIFE expression and print the result variable
let result = (function() {
  // Assign a new value to a variable of the same name within this scope
  let value = 'IIFE Expression';
  // Return this local value to the result variable
  return value;
})();
// Print the result variable
console.log(result);

// Step 4: Create an anonymous function with a parameter and print it as part of a string sentence
(function(passedValue) {
  // Assign the passed-in value to the same variable name
  let value = passedValue;
  // Print it as part of a string sentence
  console.log(`Anonymous Function: ${value}`);
})('Passed-in Value');
//-----------------------------------------------------------------------//
// Step 1 and 2: Create a factorial function
function calculateFactorial(value) {
    if (value === 0) {
      return 1;
    } else {
      // Recursive call to the function with a decremented value
      return value * calculateFactorial(value - 1);
    }
  }
  
  // Step 3: Invoke the function with an argument and output the results to the console
  function runFactorialCalculation(initialValue) {
    console.log(`Calculating factorial for ${initialValue}: ${calculateFactorial(initialValue)}`);
  }
  
  // Initial invocation with an argument of 5
  runFactorialCalculation(5);
  
  // Step 4: Change and update the number to see how it affects the results
  runFactorialCalculation(8);
//----------------------------------------------------------------------//
// Step 1: Set the start variable at a value of 10
let start = 10;

// Step 2-8: Create a function for countdown
function countdown(value) {
  // Step 3: Output the current value of the countdown into the console
  console.log(`Countdown: ${value}`);

  // Step 4: Check if the value is less than 1; if true, return the function
  if (value < 1) {
    return;
  }

  // Step 5-6: Continue the loop by calling the function within itself
  countdown(value - 1);
}

// Step 7-9: Create a second countdown using a condition
function countdownSecond(value) {
  // Check if the value is greater than 0
  if (value > 0) {
    // Decrease the value of the countdown by 1
    value--;

    // Step 8: Use return to return the function and continue the loop
    return countdownSecond(value);
  }
}

// Step 10: Invoke the countdown functions
countdown(start);
countdownSecond(start);
//-----------------------------------------------------------------//
// Step 1: Set a variable name and assign a function expression to it
let printArgumentExpression = function(arg) {
    console.log("Function Expression:", arg);
  };
  
  // Step 2: Pass an argument into the function expression
  printArgumentExpression("Hello from Function Expression");
  
  // Step 3: Create the same function as a normal function declaration
  function printArgumentDeclaration(arg) {
    console.log("Function Declaration:", arg);
  }
  
  // Pass an argument into the function declaration
  printArgumentDeclaration("Hello from Function Declaration");
//--------------------------------------------------------------//
// Recursive function to count up to 10
function countUpTo10(value) {
    // Output the current value to the console
    console.log(value);
  
    // Base case: Check if the value is greater than or equal to 10
    if (value >= 10) {
      return;
    }
  
    // Recursive call: Increment the value and call the function again
    countUpTo10(value + 1);
  }
  
  // Invoke the function with different start numbers as arguments
  countUpTo10(5); // Start counting from 5
  countUpTo10(8); // Start counting from 8
  countUpTo10(12); // Start counting from 12 (will not reach 10)
//----------------------------------------------------//
// Arrow function to output the value "one"
const outputOne = () => console.log("One");

// Arrow function to output the value "two"
const outputTwo = () => console.log("Two");

// Arrow function to output the value "three" and invoke the first two functions
const outputThree = () => {
  console.log("Three");
  outputOne();
  outputTwo();
};

// Arrow function to output the word "four" and use setTimeout to invoke functions
const outputFour = () => {
  console.log("Four");

  // setTimeout to invoke outputOne immediately
  setTimeout(outputOne, 0);

  // setTimeout to invoke outputThree after a short delay
  setTimeout(outputThree, 100);
};

// Invoke the fourth function to see the desired output
outputFour();
//-------------------------------------------------------------------//
