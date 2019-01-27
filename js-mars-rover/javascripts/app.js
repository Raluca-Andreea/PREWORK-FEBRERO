var rovers = [];


var alpha = {
  "direction": "N",
  "x": 0,
  "y": 0
}

var gamma = {
  "direction": "S",
  "x": 2,
  "y": 2
}

var delta = {
  "direction": "W",
  "x": 5,
  "y": 3
}


rovers.push(alpha, gamma, delta);

function turnLeft(rover){
  switch(rover["direction"]){
    case "N":
    rover["direction"] = "W";
    break;
    case "W":
    rover["direction"] = "S";
    break;
    case "S":
    rover["direction"] = "E";
    break;
    case "E":
    rover["direction"] = "N";
    break;
    default:
    break;
  }
  console.log(rover["direction"]);
}

function turnRight(rover){
  switch(rover["direction"]){
    case "N": 
    rover["direction"] = "E";
    break;
    case "E":
    rover["direction"] = "S";
    break;
    case "S":
    rover["direction"] = "W";
    break;
    case "W":
    rover["direction"] = "N";
    break;
    default:
    break;
  }
  console.log(rover["direction"]);
}


function moveForward(rover, grid){
  switch(rover["direction"]){
    case "N":
      if((rover["y"] - 1) < 0){
        console.log("Out of grid"); 
      } 
      else if(!obstacles(grid, rover["x"], rover["y"] - 1)){
        console.log("Obstacle found");
      }
      else if (!otherRovers(grid, rover["x"], rover["y"] - 1)){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"] - 1][rover["x"]] = "R";
        grid[rover["y"]][rover["x"]] = "";
        rover["y"] --;
      }
      break;

    case "W":
      if((rover["x"] - 1) < 0){
        console.log("Out of grid");
      }
      else if(!obstacles(grid, rover["x"] - 1, rover["y"])) {
        console.log("Obstacle found");
      }
      else if(!otherRovers(grid, rover["x"] -1, rover["y"])){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"]][rover["x"] - 1] = "R";
        grid[rover["y"]][rover["x"]] = "";
        rover["x"] --;
      }
      break;

    case "S":
      if((rover["y"] + 1) > 9){
        console.log("Out of grid");
      }
      else if(!obstacles(grid, rover["x"], rover["y"] + 1)){
        console.log("Obstacle found");
      }
      else if(!otherRovers(grid, rover["x"], rover["y"] + 1)){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"] + 1][rover["x"]] = "R";
        grid[rover["y"]][rover["x"]] = "";
        rover["y"] ++;
      }
      break;

    case "E":
      if((rover["x"] + 1) > 9){
        console.log("Out of grid");
      }
      else if(!obstacles(grid, rover["x"] + 1, rover["y"])){
        console.log("Obstacle found")
      }
      else if(!otherRovers(grid, rover["x"] + 1, rover["y"])){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"]][rover["x"] + 1] = "R";
        grid[rover["y"]][rover["x"]] = "";
        rover["x"] ++;
      }
      break;
    default:
      break;
  }
  console.log(rover["x"], rover["y"]);
}

function moveBackward(rover, grid){
  switch(rover["direction"]){
    case "N":
      if((rover["y"] + 1) > 9){
        console.log("Out of grid"); 
      } 
      else if(!obstacles(grid, rover["x"], rover["y"] + 1)){
        console.log("Obstacle found");
      }
      else if(!otherRovers(grid, rover["x"], rover["y"] + 1)){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"] + 1][rover["x"]] = "R";
        grid[rover["y"]][rover["x"]] = "";
        rover["y"] ++;
      }
      break;

    case "W":
      if((rover["x"] + 1) > 9){
        console.log("Out of grid");
      }
      else if(!obstacles(grid, rover["x"] + 1, rover["y"])){
        console.log("Obstacle found");
      }
      else if(!otherRovers(grid, rover["x"] + 1, rover["y"])){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"]][rover["x"] + 1] = "R";
        grid[rover["y"]][rover["x"]] = ""; 
        rover["x"] ++;
      }
      break;

    case "S":
      if((rover["y"] - 1) < 0){
        console.log("Out of grid");
      }
      else if(!obstacles(grid, rover["x"], rover["y"] - 1)){
        console.log("Obstacle found");
      }
      else if(!otherRovers(grid, rover["x"], rover["y"] - 1)){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"] - 1][rover["x"]] = "R";
        grid[rover["y"]][rover["x"]] = ""; 
        rover["y"] --;
      }
      break;

    case "E":
      if((rover["x"] - 1) < 0){
        console.log("Out of grid"); 
      }
      else if(!obstacles(grid, rover["x"] - 1, rover["y"])){
        console.log("Obstacle found");
      }
      else if(!otherRovers(grid, rover["x"] - 1, rover["y"])){
        console.log("Other rover found");
      }
      else {
        grid[rover["y"]][rover["x"] - 1] = "R";
        grid[rover["y"]][rover["x"]] = "";
        rover["x"] --;
      }
      break;
    default:
      break;
  }
  console.log(rover["x"], rover["y"]);
}

var nextMove = "rfffrfrrf";


function commands(moves, rovers){
  if(validate(moves)){
    for(var i = 0; i < moves.length; i++){
      switch(moves[i]){
        case "l":
          turnLeft(rovers[i % rovers.length]);
          rovers[i % rovers.length]["travelLog"].push(rovers[i % rovers.length]["x"], rovers[i % rovers.length]["y"]);
          console.log(rovers[i % rovers.length]["travelLog"]);
        break;

        case "r":
          turnRight(rovers[i % rovers.length]);
          rovers[i % rovers.length]["travelLog"].push(rovers[i % rovers.length]["x"], rovers[i % rovers.length]["y"]);
          console.log(rovers[i % rovers.length]["travelLog"]);
        break;

        case "f":
          moveForward(rovers[i % rovers.length], grid);
          rovers[i % rovers.length]["travelLog"].push(rovers[i % rovers.length]["x"], rovers[i % rovers.length]["y"]);
          console.log(rovers[i % rovers.length]["travelLog"]);
        break;

        case "b":
          moveBackward(rovers[i % rovers.length], grid);
          rovers[i % rovers.length]["travelLog"].push(rovers[i % rovers.length]["x"], rovers[i % rovers.length]["y"]);
          console.log(rovers[i % rovers.length]["travelLog"]); 
        break; 
      }
    }
  }
  else {
    console.log("Not valid");
  }
}

rovers[0]["travelLog"] = [];
rovers[1]["travelLog"] = [];
rovers[2]["travelLog"] = [];

function validate(moves){
  for(var i = 0; i < moves.length; i++){
    if((moves[i] !== "l") && (moves[i] !== "r") && (moves[i] !== "f") && (moves[i] !== "b")){
      return false;
    }
  }
  return true;
}

var grid = [
  ["", "", "", "", "", "O", "", "", "", ""],
  ["", "", "O", "", "", "", "", "O", "", "O"],
  ["O", "", "", "O", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "O", "", "", "O", "", "O", "", ""],
  ["", "O", "", "", "", "", "", "", "", "O"],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["O", "", "", "O", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]
]
  
function obstacles(grid, x, y){
  if(grid[y][x] === "O"){
    return false;
  } else {
    return true;
  }
}

function otherRovers(grid, x, y){
  if(grid[y][x] === "R"){
    return false;
  }
  else {
    return true;
  }
}


