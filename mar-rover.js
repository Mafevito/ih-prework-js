// Posicion actual 
var rover = {
	position: [0,0],
	direction: 'N'
}

var secondRover = {
	position: [0,6],
	direction: 'S'
}

var obstaculos = {
	name1: 'piedra',
	position1: [1,0],
	name2 : 'crater',
	position2: [2,0]
}


// Rejilla 10 x 10
var bidiarreglo = new Array(10);
for (var i = 0; i < 10; i++) {
	bidiarreglo[i] = new Array(10);

    for (var x = 0; x < 10; x++) {
	    bidiarreglo[i][x] = "[" + i + "," + x + "]";
    }
}


// Funcion de Avanzar
function irAdelante(rover) {
    switch(rover.direction) {
        case 'N':
        rover.position[0]++;
        break;
        case 'E':
        rover.position[1]++;
        break;
        case 'S':
        rover.position[0]--;
        break;
        case 'W':
        rover.position[1]--;
        break;
    }
}


// Funcion de Retroceder
function irAtras(rover) {
	switch(rover.direction) {
		case 'N':
		rover.position[0]--;
		break;
		case 'E':
		rover.position[1]--;
		break;
		case 'S':
		rover.position[0]++;
		break;
		case 'W':
		rover.position[1]++;
		break;
	}
}


// Funcion de Ir derecha 
function irDerecha(rover) {
	switch(rover.direction) {
		case 'N':
		rover.position = 'E';
		break;
		case 'E':
		rover.position = 'S';
		break;
		case 'S':
		rover.position = 'W';
		break;
		case 'W':
		rover.position = 'N';
		break;
	}
}


// Funcion de Ir izquierda 
function irIzquierda(rover) {
	switch(rover.direction) {
		case 'N':
		rover.position = 'W';
		break;
		case 'E':
		rover.position = 'N';
		break;
		case 'S':
		rover.position = 'E';
		break;
		case 'W':
		rover.position = 'S';
		break;
	}
}


// Preguntar al usuario a donde quiere que valla rover
var instrucciones = prompt("¿A donde quieres que valla Rover? \n Puede ir a las siguientes direcciones \n f: Adelante \n b: Atrás \n r: Girar a la derecha \n l: Girar a la izquierda ");


// Mover segun las instrucciones 
function segunInstrucciones(rover, secondRover) {
	for (var i = 0; i < instrucciones.length; i++) {
		switch(instrucciones[i]) {
			case "f":
			irAdelante(rover);
	        break;
	        case "b":
	        irAtras(rover);
	        break;
	        case "r":
	        irDerecha(rover);
	        break;
	        case "l":
	        irIzquierda(rover);
	        break;
	        default:
	        console.log("El argumento introducido es incorrecto");
	        break;
		}
	}

// Si se encuentra un obstaculo por el camino
if (rover.position[i] == obstaculos.position1[i]) {
	console.log("Se ha encontrado un obstaculo, es una" + " " + obstaculos.name1 + "!");
} 

else if (rover.position[i] == obstaculos.position2[i]) {
	console.log("Se ha encontrado un obstaculo, es una" + " " + obstaculos.name2 + "!");
}
    console.log("Rover position: [" + rover.position[0] + "," + rover.position[1] + "]\nRover direction: " + rover.direction);
}

// Posiciones actuales de rover y second Rover
console.log("---Primer rover---");
segunInstrucciones(rover, secondRover);

console.log("---Segundo rover---");
segunInstrucciones(secondRover, rover);


//Posiciones finales
console.log("---Posiciones finales---")
console.log("Posicion final de Rover: [" + rover.position + "]");
console.log("Posicion final de Second Rover: [" + secondRover.position + "]");