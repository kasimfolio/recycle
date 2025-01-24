function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Bh0XMkL2CD":
        Script1();
        break;
      case "6W6quC9UdTs":
        Script2();
        break;
      case "5fsOceUnLxF":
        Script3();
        break;
      case "6EPXhYTqNBW":
        Script4();
        break;
      case "6RrDMJfCa8j":
        Script5();
        break;
      case "6k8S2f1vaLX":
        Script6();
        break;
      case "6PcEx32eTdF":
        Script7();
        break;
      case "6WbFW2fkjsF":
        Script8();
        break;
      case "6fI1ldjx0Oz":
        Script9();
        break;
      case "6LLlvEiVzEv":
        Script10();
        break;
      case "6gVqHYRbNGB":
        Script11();
        break;
      case "5rnbRbfATKg":
        Script12();
        break;
      case "5daDxx5QOfQ":
        Script13();
        break;
      case "6WSpedB0Ae3":
        Script14();
        break;
      case "6LhqsU89NYI":
        Script15();
        break;
      case "5hFmAekkI0s":
        Script16();
        break;
      case "61lxb5EeH7r":
        Script17();
        break;
      case "6Rb7JrCCkrz":
        Script18();
        break;
      case "5oc5ro0UGF2":
        Script19();
        break;
      case "5hIktY7uNmN":
        Script20();
        break;
      case "6qdlra2xdmq":
        Script21();
        break;
      case "6TClcjLWona":
        Script22();
        break;
      case "6gyDhthCfFh":
        Script23();
        break;
      case "63X9pjEY8kM":
        Script24();
        break;
      case "6KS6hXXCAEm":
        Script25();
        break;
      case "6LDIrgpYFmo":
        Script26();
        break;
      case "5grBwXluOIi":
        Script27();
        break;
      case "5mTHJQ1LC8M":
        Script28();
        break;
      case "6j0MvkGkXjA":
        Script29();
        break;
      case "5pzVl9Frgfz":
        Script30();
        break;
      case "5xRnL5bxdZh":
        Script31();
        break;
      case "5sfwfflb6xe":
        Script32();
        break;
      case "6Pkhj980OQa":
        Script33();
        break;
      case "5july90nZIW":
        Script34();
        break;
      case "6YJYheuqpyD":
        Script35();
        break;
      case "6EaJv5uSP5N":
        Script36();
        break;
      case "6VgPZX9ggAN":
        Script37();
        break;
      case "6ZHPr7msAd0":
        Script38();
        break;
      case "65dYBV89e7r":
        Script39();
        break;
      case "6brv9u7SAst":
        Script40();
        break;
      case "6UlFDofhro7":
        Script41();
        break;
      case "6fgXvqQBXbK":
        Script42();
        break;
      case "6BIPuUvYhkx":
        Script43();
        break;
      case "6pBcNcw3FVr":
        Script44();
        break;
      case "6ZtnGoJufL5":
        Script45();
        break;
      case "6IKzdZJfAM0":
        Script46();
        break;
      case "5agBoTuTzTD":
        Script47();
        break;
      case "5wO62SQunBo":
        Script48();
        break;
      case "6V1xkmYAin8":
        Script49();
        break;
      case "5aqXCg70b4F":
        Script50();
        break;
      case "5aunf5RcuMY":
        Script51();
        break;
  }
}

function Script1()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script2()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script3()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script4()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script5()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script6()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script7()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script8()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script9()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script10()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script11()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script12()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script13()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script14()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script15()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script16()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script17()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script18()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script19()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script20()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script21()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script22()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script23()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script24()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script25()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script26()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script27()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script28()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script29()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script30()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script31()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script32()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script33()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script34()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script35()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script36()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script37()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script38()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script39()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script40()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script41()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script42()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script43()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script44()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script45()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script46()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script47()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script48()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script49()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script50()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

function Script51()
{
  // Get the player object
var player = GetPlayer();

// Retrieve the already used values from a Storyline variable
var usedValues = player.GetVar("UsedValues") || ""; // Initialize if undefined

// Convert the used values string to an array
var usedArray = usedValues.split(",").filter(val => val !== "");

// Define the range of possible values
var possibleValues = Array.from({length: 50}, (_, i) => i + 1); // [1, 2, ..., 50]

// Filter out already used values
var availableValues = possibleValues.filter(val => !usedArray.includes(val.toString()));

// Check if there are any available values left
if (availableValues.length > 0) {
    // Randomly select an available value
    var randomIndex = Math.floor(Math.random() * availableValues.length);
    var randomValue = availableValues[randomIndex];

    // Update the UsedValues variable
    usedArray.push(randomValue);
    player.SetVar("UsedValues", usedArray.join(","));

    // Set the random value in a Storyline variable
    player.SetVar("RandomValue", randomValue);
} else {
    // Reset UsedValues if all values have been used
    player.SetVar("UsedValues", "");
    player.SetVar("RandomValue", -1); // Set a default or error value
}

}

