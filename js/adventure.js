// Define the size of the gameplay area
var maxX = 2;
var maxY = 2;

// User starts at x0, y0 (bottom left of board)
var userX = 0;
var userY = 0;

// Hide the treasure, also with random x y values
var treasureX = Math.floor((Math.random() * 2) + 1);
var treasureY = Math.floor((Math.random() * 2) + 1);

// Flag that controls loop
var treasureFound = false;

// Get user's name, document and change html class with user's name
function myUserName() {
  var name = prompt("Welcome brave adventurer! What is your name?");
  var inputName = document.getElementsByClassName("userName");
  inputName[0].innerHTML = "Welcome to TEXT-QUEST ADVENTURE, " + name + "!";
}

// function that starts game with prompt
function textQuest() {
  while(!treasureFound) {
    var direction = prompt("Which direction would you like to go in? (north, south, east, west)\n" + "Current Pos: " + "(" + userX + ", " + userY + ")");

    console.log(direction);

    // tmp vars, only used for checking validity of new user location after move
    var newX
    var newY

    // see what new user location should be

    // check if new user location is valid

    // check if new user location is treasure

    if(direction == "north") {
      newX = userX;
      newY = userY + 1;
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;

      } else {
        console.log("There is a forbidding mountain range in that direction, you cannot go");
      }
    } else if(direction == "east") {
      newX = userX + 1;
      newY = userY;
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;
      } else {
        console.log("There is a forbidding mountain range in that direction, you cannot go");
      }
    } else if(direction == "south") {
      newX = userX;
      newY = userY - 1;
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;
      } else {
        console.log("There is a forbidding mountain range in that direction, you cannot go");
      }
    } else if(direction == "west") {
      newX = userX - 1;
      newY = userY;
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY) {
        userX = newX;
        userY = newY;
      } else {
        console.log("There is a forbidding mountain range in that direction, you cannot go");
      }
    } else {
      console.log("please enter a real direction");
    }

    // see if user location matches treasure
      if(userX == treasureX && userY == treasureY) {
        treasureFound = true;
        console.log("FOUND IT");
      }
  }
}