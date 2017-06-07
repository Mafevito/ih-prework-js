var myRover = {
  position: [0,0], 
  direction: 'N'
};

//Contador para controlar las veces que el programa pide introducir instrucciones
var counter = 1;

//Avanzar
function goForward(myRover) {
  switch( myRover.direction) {
    case 'N':
       myRover.position[0]++;
      break;
    case 'E':
       myRover.position[1]++;
      break;
    case 'S':
       myRover.position[0]--;
      break;
    case 'W':
       myRover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" +  myRover.position[0] + ", " +  myRover.position[1] + "] Rover Direction : [" + myRover.direction +"]");
}

//Retroceder
function goBack(myRover) {
  switch(myRover.direction) {
    case 'N':
       myRover.position[0]--;
      break;
    case 'E':
       myRover.position[1]--;
      break;
    case 'S':
       myRover.position[0]++;
      break;
    case 'W':
       myRover.position[1]++;
      break;
  }
  
  console.log("New Rover Position: [" +  myRover.position[0] + ", " +  myRover.position[1] + "] Rover Direction : [" +myRover.direction +"]");
}

//Girar derecha
function goRight(myRover) {
  switch( myRover.direction) {
    case 'N':
      myRover.direction ='E';
      break;
    case 'E':
      myRover.direction ='S';
      break;
    case 'S':
       myRover.direction ='W';
      break;
    case 'W':
       myRover.direction ='N';
      break;
  }

  console.log("New Rover Direction: [" + myRover.direction +"] Rover Position: ["+ myRover.position + "]");
}

//Girar izquierda
function goLeft(myRover) {
  switch( myRover.direction) {
    case 'N':
       myRover.direction ='W';
      break;
    case 'E':
       myRover.direction ='N';
      break;
    case 'S':
       myRover.direction ='E';
      break;
    case 'W':
       myRover.direction ='S';
      break;
  }

    console.log("New Rover Direction: [" + myRover.direction +"] Rover Position: ["+ myRover.position + "]");
}

//Inicio programa
  
console.log("MARS ROVER CONTROL CENTER");
console.log("#########################");
console.log("Initial Rover position ["+ myRover.position +"]" );
console.log("#########################");

//Contador (1 vuelta)
while (counter <= 1){
  
//Input
myRoverInstr = prompt("Enter command sequence");
//Convierte script en array
myRoverArrayInstr = myRoverInstr.split(""); 
console.log(myRoverArrayInstr);

//Analiza la array y se desplaza
var arrayLength = myRoverArrayInstr.length;
for (var i = 0; i < arrayLength; i++) {
    if (myRoverArrayInstr[i].toLowerCase() === 'f') {
  goForward(myRover);
} else if (myRoverArrayInstr[i].toLowerCase() === 'b') {
  goBack(myRover);
} else if (myRoverArrayInstr[i].toLowerCase() === 'r') {
  goRight(myRover);
} else if (myRoverArrayInstr[i].toLowerCase() === 'l') {
  goLeft(myRover);
} else {
    console.log("Don't be rude with Rover");
  }
}
 counter += 1;
}

//Posicion Final
console.log("Final Rover position ["+ myRover.position +"]" );