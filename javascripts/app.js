// Rover Object Goes Here
// ======================
var rover = {
  direction:"N",
  x:0, 
  y:0,
  travelLog:[]
};
// ======================

// Grid goes here
// ======================
var grid = [
  [null, null, null, "O", null, null, null, null, null, null],
  [null, "O", null, "O", null, null, null, null, null, null],
  ["O", null, null, null, null, null, null, null, null, null],
  [null, "O", null, null, null, null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null],
  [null, null, null, null, "O", null, null, null, null, null],
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
  // Bounderies conditions
  if(rover.x === 0 && rover.direction === "W"|| rover.y === 0 && rover.direction === "N" 
  || rover.x === 10 && rover.direction === "E" || rover.y === 10 && rover.direction === "S"){
    return "Rover stoped. Can´t go over the grid bounderies"
  } 
  // Obstacle conditions
  else if (grid[rover.y][rover.x + 1] === "O" && rover.direction === "E" || grid[rover.y + 1][rover.x] === "O" && rover.direction === "S"
  || grid[rover.y][rover.x - 1] === "O" && rover.direction === "W" || grid[rover.y - 1][rover.x] === "O" && rover.direction === "N") {
    return "Rover stoped. Can´t move trough grid obstacle"
  }
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

function freeMovement(commands){
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

