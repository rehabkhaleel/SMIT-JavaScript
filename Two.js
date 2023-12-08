// Step 1: Create an array with 3 items
let shoppingList1 = ["Milk", "Bread", "Apples"];

// Step 2: Check the list length and output to the console
console.log("Original list length:", shoppingList1.length);

// Step 3: Update "Bread" to "Bananas"
shoppingList1[1] = "Bananas";

// Step 4: Output the entire list to the console
console.log("Updated shopping list:", shoppingList1);

//--------------------------------------------------//

// Step 1: Create an empty array
let shoppingList2 = [];

// Step 2: Add Milk, Bread, and Apples to your list
shoppingList2.push("Milk", "Bread", "Apples");

// Step 3: Update "Bread" with Bananas and Eggs
shoppingList2[1] = ["Bananas", "Eggs"];

// Step 4: Remove the last item from the array and output it to the console
let removedItem = shoppingList2.pop();
console.log("Removed item:", removedItem);

// Step 5: Sort the list alphabetically
shoppingList2.sort();

// Step 6: Find and output the index value of Milk
let indexOfMilk = shoppingList2.indexOf("Milk");
console.log("Index of Milk:", indexOfMilk);

// Step 7: After Bananas, add Carrots and Lettuce
let bananasIndex = shoppingList2.indexOf("Bananas");
shoppingList2.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

// Step 8: Create a new list containing Juice and Pop
let newList = ["Juice", "Pop"];

// Step 9: Combine both lists, adding the new list twice to the end of the first list
shoppingList2 = shoppingList2.concat(newList, newList);

// Step 10: Get the last index value of Pop and output it to the console
let lastIndexOfPop = shoppingList2.lastIndexOf("Pop");
console.log("Last index of Pop:", lastIndexOfPop);

// Step 11: Output the final list
console.log("Final shopping list:", shoppingList2);

//-----------------------------------------------------------//

// Step 1: Create an array containing three values: 1, 2, and 3
let originalArray = [1, 2, 3];

// Step 2: Nest the original array into a new array three times
let nestedArrays = [originalArray, originalArray, originalArray];

// Step 3: Output the value 2 from one of the arrays into the console
console.log("Value at index 1 of the second array:", nestedArrays[1][1]);
//--------------------------------------------------------------------//

// Step 1: Create a new myCar object with properties
let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue",
    forSale: true,
    mileage: 15000
  };
  
  // Step 2: Create a variable to hold the string value 'color'
  let propertyToModify = 'color';
  
  // Use the variable within square bracket notation to assign a new value to the color property
  myCar[propertyToModify] = 'Red';
  
  // Step 3: Use the same variable to assign a new property string value ('forSale')
  propertyToModify = 'forSale';
  
  // Use bracket notation to assign a new value to the forSale property
  myCar[propertyToModify] = false;
  
  // Step 4: Output make and model into the console
  console.log("Make:", myCar.make);
  console.log("Model:", myCar.model);
  
  // Step 5: Output the value of forSale into the console
  console.log("For Sale:", myCar.forSale);
//------------------------------------------------------//

// Step 1: Create an object named 'people' with an empty array called 'friends'
let people = {
    friends: []
  };
  
  // Step 2: Create three variables, each containing an object with first name, last name, and ID
  let friend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 123
  };
  
  let friend2 = {
    firstName: "Jane",
    lastName: "Smith",
    id: 456
  };
  
  let friend3 = {
    firstName: "Bob",
    lastName: "Johnson",
    id: 789
  };
  
  // Step 3: Add the three friends to the 'friends' array
  people.friends.push(friend1, friend2, friend3);
  
  // Step 4: Output the 'people' object to the console
  console.log(people);
//-----------------------------------------------------//
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// Remove the first item and the last item
theList.shift();
theList.pop();

// Add 'FIRST' to the start of the array
theList.unshift('FIRST');

// Assign 'hello World' to the fourth item value
theList[3] = 'hello World';

// Assign 'MIDDLE' to the third index value
theList.splice(2, 0, 'MIDDLE');

// Add 'LAST' to the last position in the array
theList.push('LAST');

// Output the modified array to the console
console.log(theList);
//-----------------------------------------------//
// Step 1: Create an array to hold an inventory of store items
let inventory = [];

// Step 2: Create three items with properties (name, model, cost, quantity)
let item1 = {
  name: "Laptop",
  model: "ABC123",
  cost: 999.99,
  quantity: 10
};

let item2 = {
  name: "Smartphone",
  model: "XYZ456",
  cost: 599.99,
  quantity: 20
};

let item3 = {
  name: "Headphones",
  model: "DEF789",
  cost: 89.99,
  quantity: 30
};

// Step 3: Add all three objects to the main array
inventory.push(item1, item2, item3);

// Log the inventory array to the console
console.log("Inventory:", inventory);

// Step 4: Access the quantity element of the third item and log it to the console
let thirdItemQuantity = inventory[2].quantity;
console.log("Quantity of the third item:", thirdItemQuantity);

// Experiment by adding and accessing more elements within your data structure
// For example:
inventory[0].manufacturer = "BrandX"; // Add a 'manufacturer' property to the first item
console.log("Manufacturer of the first item:", inventory[0].manufacturer);
//---------------------------------------------------------------------//
//chapter 4://
// Step 1: Create a variable with a Boolean value
let myVariable = true;

// Step 2: Output the value of the variable to the console
console.log("The value of myVariable:", myVariable);

// Step 3: Check whether the variable is true and output a message to the console
if (myVariable) {
  console.log("The variable is true. Performing action...");
}

// Step 4: Add another if statement with '!' to check whether the condition is not true
// Create messages to be printed based on the conditions
if (!myVariable) {
  console.log("The variable is not true. Performing alternative action...");
} else {
  console.log("The variable is true. Performing default action...");
}

// Step 5: Change the variable to the opposite to see how the result changes
myVariable = !myVariable; // Change the value to the opposite
console.log("Updated value of myVariable:", myVariable);

// Re-run the if statements to see the updated results
if (myVariable) {
  console.log("The variable is true. Performing action...");
}

if (!myVariable) {
  console.log("The variable is not true. Performing alternative action...");
} else {
  console.log("The variable is true. Performing default action...");
}
//-------------------------------------------------------------//
// Step 1: Create a prompt to ask the user's age
let userInput = prompt("Please enter your age:");

// Step 2: Convert the response from the prompt to a number
let userAge = parseInt(userInput);

// Step 3: Declare a message variable
let message1;

// Step 4: If the input age is equal to or greater than 21
if (userAge >= 21) {
  // Set the message variable to confirm entry to a venue and the ability to purchase alcohol
  message = "Welcome! You can enter the venue and purchase alcohol.";
} 
// Step 5: If the input age is equal to or greater than 19 (but less than 21)
else if (userAge >= 19) {
  // Set the message variable to confirm entry to the venue but deny the purchase of alcohol
  message = "Welcome! You can enter the venue, but alcohol purchase is not allowed.";
} 
// Step 6: Default else statement to set the message variable to deny entry if none are true
else {
  message1 = "Sorry, you are not allowed to enter the venue.";
}

// Step 7: Output the response message variable to the console
console.log(message);
//-------------------------------------------------------------------------------//
// Step 1: Create a Boolean value for an ID variable
let isIDValid = true; // Change this value to test different scenarios

// Step 2: Using a ternary operator, create a message variable to check ID validity
let message2 = isIDValid ? "Welcome! You are allowed into the venue." : "Sorry, your ID is not valid. Entry denied.";

// Step 3: Output the response to the console
console.log(message2);
//-------------------------------------------------------------------//
// Step 1: Set a variable with a random value (0-5)
let randomNumber = Math.floor(Math.random() * 6);

// Step 2: Create a prompt to get a string value input from the user
let userQuestion = prompt("Ask me a question:");

// Step 3: Create 6 responses using a switch statement
let response;
switch (randomNumber) {
  case 0:
    response = "Yes, definitely!";
    break;
  case 1:
    response = "No, not likely.";
    break;
  case 2:
    response = "Maybe, try asking again.";
    break;
  case 3:
    response = "It's uncertain right now.";
    break;
  case 4:
    response = "I'm sorry, I don't have an answer.";
    break;
  case 5:
    response = "Absolutely not!";
    break;
  default:
    response = "I'm sorry, something went wrong.";
}

// Step 4: Create a variable to hold the end response
let finalResponse = `You asked: ${userQuestion}\nMy response: ${response}`;

// Step 5: Output the user's original question and the randomly selected case response to the console
console.log(finalResponse);
//-----------------------------------------------------------------------------//
// Step 1: Create a variable called prize and prompt the user to set the value
let prize = prompt("Set the value of the prize by selecting a number between 0 and 10:");

// Step 2: Convert the prompt response to a number data type
prize = parseInt(prize);

// Step 3: Create a variable for the output message
let outputMessage = "My Selection: ";

// Step 4: Using the switch statement, provide a response regarding the awarded prize
let prizeResponse;
switch (prize) {
  case 0:
    prizeResponse = "You won a small token!";
    break;
  case 1:
    prizeResponse = "Congratulations! You've won a coupon!";
    break;
  case 2:
    prizeResponse = "You won a keychain!";
    break;
  case 3:
  case 4:
    prizeResponse = "You've won a discount on your next purchase!";
    break;
  case 5:
  case 6:
    prizeResponse = "Wow! You won a free item!";
    break;
  case 7:
  case 8:
    prizeResponse = "Fantastic! You've won a gift card!";
    break;
  case 9:
  case 10:
    prizeResponse = "Incredible! You are the grand prize winner!";
    break;
  default:
    prizeResponse = "Sorry, no prize for that selection.";
}

// Step 5: Output the message back to the user by concatenating variables
let finalMessage = outputMessage + prizeResponse;
console.log(finalMessage);
//----------------------------------------------------------------------//
// Step 1: Set a dynamic number value
let dynamicNumber = 7; // You can change this value to any number of your choice

// Step 2: Ask the user to enter a number
let userNumber = prompt("Enter a number:");

// Step 3: Convert the user input to a number data type
userNumber = parseFloat(userNumber);

// Step 4: Check whether the user's number is greater than, equal to, or less than the dynamic number
if (userNumber > dynamicNumber) {
  console.log("Your number is greater than the dynamic number.");
} else if (userNumber === dynamicNumber) {
  console.log("Your number is equal to the dynamic number.");
} else {
  console.log("Your number is less than the dynamic number.");
}
//--------------------------------------------------------------//
// Ask the user to enter a name
let userName = prompt("Enter a name:");

// Use a switch statement to check if the name is a known friend
switch (userName.toLowerCase()) {
  case "alice":
    console.log("Confirmation: " + userName + " is a friend!");
    break;
  case "bob":
    console.log("Confirmation: " + userName + " is a friend!");
    break;
  case "charlie":
    console.log("Confirmation: " + userName + " is a friend!");
    break;
  default:
    console.log("Sorry, I don't know " + userName + ". Are you sure we're friends?");
}
//-----------------------------------------------------------------------------//
// Step 1: Create an array with Rock, Paper, and Scissors
let choices = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random numbers for player and computer selections
let playerIndex = Math.floor(Math.random() * 3);
let computerIndex = Math.floor(Math.random() * 3);

// Step 3: Create a variable for the response message
let message = "Player chose " + choices[playerIndex] + ". Computer chose " + choices[computerIndex] + ". ";

// Step 4: Create a condition for a tie
if (playerIndex === computerIndex) {
  message += "It's a tie!";
} else {
  // Step 5: Use conditions to apply the game logic
  if (
    (playerIndex === 0 && computerIndex === 2) ||  // Rock beats Scissors
    (playerIndex === 1 && computerIndex === 0) ||  // Paper beats Rock
    (playerIndex === 2 && computerIndex === 1)     // Scissors beat Paper
  ) {
    message += "Player wins!";
  } else {
    message += "Computer wins!";
  }
}

// Step 6: Output the result message to the console
console.log(message);
//---------------------------------------------------------//