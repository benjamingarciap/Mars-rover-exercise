// Rover Objects Go Here
// ======================
var rover1 = {
  direction:"N",
  x:0, 
  y:0,
  travelLog:[],
  position:[]
};
var rover2 = {
  direction:"N",
  x:1, 
  y:0,
  travelLog:[],
  position: []
};
var otherRover;
// ======================

// Turn variable goes here
// ======================
var turn = 1;
// ======================

// Grid goes here
// ======================
var grid = [
  [null, null, null, null, "O", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "O", null, null, null, null],
  [null, "O", null, null, null, null, null, null, null, null],
  [null, null, null, null, "O", null, null, "O", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "O", null, null, "O", null, null],
  [null, null, null, null, "O", null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null],
];
// ======================

// Basic Movement Functions Go Here
// ======================

function turnLeft(rover){
  switch(rover.direction){
    case "N": rover.direction = "W";
    break;
    case "W": rover.direction = "S";
    break;
    case "S": rover.direction = "E";
    break;
    case "E": rover.direction = "N";
    break;
    default: console.log("Does not compute");
    break;
  }
  console.log("turnLeft was called! Rover is currently facing "+ rover.direction);
}

function turnRight(rover){
  switch(rover.direction){
    case "N": rover.direction = "E" 
    break;
    case "E": rover.direction = "S";
    break;
    case "S": rover.direction = "W";
    break;
    case "W": rover.direction = "N";
    break;
    default: console.log("Does not compute");
    break;
  }
  console.log("turnRight was called! Rover is currently facing "+ rover.direction);
}

function moveForward(rover){
  // Rover definition
  switch(rover){
    case rover1: otherRover = rover2;
    break;
    case rover2: otherRover = rover1; 
    break;
  }
  // Rovers position definition
  rover["position"].push(rover.y, rover.x);
  otherRover["position"].push(otherRover["y"], otherRover["x"]);
  // Grid boundaries conditions
  if(rover.x === 0 && rover.direction === "W"|| rover.y === 0 && rover.direction === "N" 
  || rover.x === 10 && rover.direction === "E" || rover.y === 10 && rover.direction === "S"){
    rover["position"] = [];
    otherRover["position"] = [];
    return "Rover stoped. Can´t go over the grid bounderies";
  } 
  // Grid obstacle conditions
  else if(grid[rover.y][rover.x + 1] === "O" && rover.direction === "E" || grid[rover.y + 1][rover.x] === "O" && rover.direction === "S"
  || grid[rover.y][rover.x - 1] === "O" && rover.direction === "W" /* || grid[rover.y - 1][rover.x] === "O" && rover.direction === "N" */) {
    rover["position"] = [];
    otherRover["position"] = [];
    return "Rover stoped. Can´t move trough grid obstacle";
  }
  // otherRover Obstacle conditions
  else if(rover["position"][0] === otherRover["position"][0] && rover["position"][1] + 1  === otherRover["position"][1] && rover.direction === "E" 
    || rover["position"][0] + 1 === otherRover["position"][0] && rover["position"][1] === otherRover["position"][1] && rover.direction === "S" 
    || rover["position"][0] === otherRover["position"][0] && rover["position"][1] - 1  === otherRover["position"][1] && rover.direction === "W"
    || rover["position"][0] - 1 === otherRover["position"][0] && rover["position"][1]  === otherRover["position"][1] && rover.direction === "N"){
     // Rovers position reset
    rover["position"] = [];
    otherRover["position"] = [];
    return "Rover stoped. Can´t move " + otherRover + " blocking path";
  }
 
  
  /*
  else if(grid[rover.y][rover.x + 1] === grid[otherRover2.y][otherRover2.x] && rover.direction === "E" || 
  grid[rover.y + 1][rover.x] === grid[otherRover2.y][otherRover2.x] && rover.direction === "S"|| 
  grid[rover.y][rover.x - 1] === grid[otherRover2.y][otherRover2.x] && rover.direction === "W" || 
  grid[rover.y - 1][rover.x] === grid[otherRover2.y][otherRover2.x] && rover.direction === "N"){
    return "Rover stoped. Can´t move " + otherRover2 + " blocking path"
  }
  */

  // TravelLog 
  rover.travelLog.push("y:" + rover.y + " x:" + rover.x);
  // Movement logic
  switch(rover.direction) {
    case "N": rover.y--;
    break;
    case "W": rover.x--;
    break;
    case "S": rover.y++;
    break;
    case "E": rover.x++;
    break;
    default: console.log("Does not compute");
    break;

  }
  rover["position"] = [];
  otherRover["position"] = [];
  console.log("moveForward was called. Mars Rover is on X:" + rover.x + " Y:" + rover.y);
}

function moveBackwards(rover){
  // Bounderies conditions
  if(rover.x === 0 && rover.direction === "L"|| rover.y === 0 && rover.direction === "O" || rover.x === 10 && rover.direction === "W" || rover.y === 10 && rover.direction === "N"){
    return "Rover stoped. Can´t go over the grid bounderies"
  }
  // Obstacle conditions
  else if (grid[rover.y][rover.x - 1] === "O" && rover.direction === "E" || grid[rover.y - 1][rover.x] === "O" && rover.direction === "S"
  || grid[rover.y][rover.x + 1] === "O" && rover.direction === "W" || grid[rover.y + 1][rover.x] === "O" && rover.direction === "N") {
    return "Rover stoped. Can´t move trough grid obstacle"
  };
  // TravelLog 
  rover.travelLog.push("y:" + rover.y + " x:" + rover.x);
  // Movement logic
  switch(rover.direction) {
    case "N": rover.y++;
    break;
    case "W": rover.x++;
    break;
    case "S": rover.y--;
    break;
    case "E": rover.x--;
    break;
    default: console.log("Does not compute");
    break;

}
  console.log("moveBackwards was called. Mars Rover is on X:" + rover.x + " Y:" + rover.y);
}
// ======================


// Complex Movement Functions Go Here
// ======================

function freeMovement(rover ,commands){
  for(i=0; i<commands.length; i++){
    if(commands[i]=== "f"){
      moveForward(rover);
    }
    else if(commands[i] === "r"){
      turnRight(rover);
    }
    else if(commands[i] === "l"){
      turnLeft(rover);
    }
    else if(command[i] === "b"){
      moveBackwards(rover);
    }
    else {
      continue
    }
  }
  console.log("freeMovement was called. Mars Rover is CURRENTLY on X:" + rover.x + " Y:" + rover.y);
  console.log("Mars rover has moved trough this coordinates " + rover.travelLog)
}

// ======================

