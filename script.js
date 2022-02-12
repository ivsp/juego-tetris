const boardWidth = 10;
const boardHeight = 20;

const divBody = document.createElement("div");
divBody.classList.add("body_container");
document.body.appendChild(divBody);

const headerEl = document.createElement("header");
divBody.appendChild(headerEl);

const divBodyHeader = document.createElement("div");
divBodyHeader.classList.add("body_container--header");
headerEl.appendChild(divBodyHeader);

const divLogo = document.createElement("div");
divLogo.classList.add("body_container--logo");
divBodyHeader.appendChild(divLogo);

const imgHeader = document.createElement("img");
imgHeader.classList.add("body_container--img");
imgHeader.src = "./src/tetris-logo.jpg";
divLogo.appendChild(imgHeader);

const mainEl = document.createElement("main");
divBody.appendChild(mainEl);

const divMain = document.createElement("div");
divMain.classList.add("main");
mainEl.appendChild(divMain);

const divMainSplit = document.createElement("div");
divMainSplit.classList.add("main_split");
divMain.appendChild(divMainSplit);

const divContainerTetris = document.createElement("div");
divContainerTetris.classList.add("container_tetris");
divMainSplit.appendChild(divContainerTetris);

// El de arriba es el div que contiene los 200 divs con los 200 mini divs dentro.

drawBoard("cells", "cells_padding", boardWidth, boardHeight);

function drawBoard(mainContainerClass, secondContainerClass, width, heigth) {
  for (let i = 0; i < width * heigth; i++) {
    const drawBoardOutboardCells = document.createElement("div");
    drawBoardOutboardCells.classList.add(mainContainerClass);
    drawBoardOutboardCells.id = i; //añadimos una clase con un numero para poder seleccionar luego la celda
    divContainerTetris.appendChild(drawBoardOutboardCells);

    const drawBoardInnerCells = document.createElement("div");
    drawBoardInnerCells.classList.add(secondContainerClass);
    drawBoardOutboardCells.appendChild(drawBoardInnerCells);
  }
}
//cada elemento de la clase cell va a tener una clase del 0 al 199 que indicará la posicion de ese elemnento en el tablero
//de esta forma podremos seleccionar por el valor de esa clase. Es decir, nuestro div con la clase 4. lo seleccionaremos asi:
// document.querySelector('.${posición de nuestra pieza}') --> Lo haremos con un forEach
//------------------------------------------------------------------------------------

const divMini = document.createElement("div");
divMini.classList.add("mini_container");
divMain.appendChild(divMini);

const scoreh3 = document.createElement("h3");
scoreh3.textContent = "Score";
scoreh3.classList.add("mini_container--score");
divMini.appendChild(scoreh3);

const scoreCounter = document.createElement("div");
scoreCounter.textContent = "0";
scoreCounter.classList.add("mini_container--number");
divMini.appendChild(scoreCounter);

const divMiniGrid = document.createElement("div");
divMiniGrid.classList.add("mini_container--grid");
divMini.appendChild(divMiniGrid);

// el de arriba es el div que contiene los 16 divs con los 16 mini divs dentro. El minigrid va de 58-59
drawMiniBoard();

function drawMiniBoard() {
  for (let i = 1; i <= 16; i++) {
    const drawBoardOutboardCells = document.createElement("div");
    drawBoardOutboardCells.classList.add("cells");
    divMiniGrid.appendChild(drawBoardOutboardCells);

    const drawBoardInnerCells = document.createElement("div");
    drawBoardInnerCells.classList.add("cells_padding");
    drawBoardOutboardCells.appendChild(drawBoardInnerCells);
  }
}
//------------------------------------------------

const div3Arrows = document.createElement("div");
div3Arrows.classList.add("mini_container--arrows");
divMini.appendChild(div3Arrows);

const left = document.createElement("i");
left.classList.add("fas", "fa-arrow-left");
div3Arrows.appendChild(left);

const right = document.createElement("i");
right.classList.add("fas", "fa-arrow-right");
div3Arrows.appendChild(right);

const down = document.createElement("i");
down.classList.add("fas", "fa-arrow-down");
div3Arrows.appendChild(down);

const span = document.createElement("span");
span.classList.add("move");
span.textContent = "Move";
div3Arrows.appendChild(span);

const divRotate = document.createElement("div");
divRotate.classList.add("mini_container--rotate");
divMini.appendChild(divRotate);

const up = document.createElement("i");
up.classList.add("fas", "fa-arrow-up");
divRotate.appendChild(up);

const rotate = document.createElement("span");
rotate.classList.add("rotate");
rotate.textContent = "Rotate";
divRotate.appendChild(rotate);

// console.log(divBody);

// Creo los Arrays de los Tetrominoe.

const tetrominoI = [
  [0, boardWidth, boardWidth * 2, boardWidth * 3],
  [0, 1, 2, 3],
];
const tetrominoL = [
  [0, 1, boardWidth + 1, boardWidth * 2 + 1],
  [2, boardWidth, boardWidth + 1, boardWidth + 2],
  [0, boardWidth, boardWidth * 2, boardWidth * 2 + 1],
  [0, 1, 2, boardWidth],
];
const tetrominoS = [
  [0, boardWidth, boardWidth + 1, boardWidth * 2 + 1],
  [1, 2, boardWidth, boardWidth + 1],
];
const tetrominoZ = [
  [1, boardWidth, boardWidth + 1, boardWidth * 2],
  [0, 1, boardWidth + 1, boardWidth + 2],
];
const tetrominoJ = [
  [1, boardWidth + 1, boardWidth * 2, boardWidth * 2 + 1],
  [0, boardWidth, boardWidth + 1, boardWidth + 2],
  [0, 1, boardWidth, boardWidth * 2],
  [0, 1, 2, boardWidth + 2],
];
const tetrominoO = [[0, 1, boardWidth, boardWidth + 1]];

const tetrominoT = [
  [1, boardWidth, boardWidth + 1, boardWidth * 2 + 1],
  [1, boardWidth, boardWidth + 1, boardWidth + 2],
  [0, boardWidth, boardWidth + 1, boardWidth * 2],
  [0, 1, 2, boardWidth + 1],
];
const currentTetrominoe = [
  tetrominoI,
  tetrominoL,
  tetrominoS,
  tetrominoZ,
  tetrominoJ,
  tetrominoO,
  tetrominoT,
];

//------------------------------------------------

/***
 * CREO LA FUNCION GENERATERANDOMTETROMINOE
 */

/*esta función recibirá como parámetro de entrada un array con todos los tetromios
 y devuelve un objeto con las propiedades:
        - positionAtTetrominoeList (number)
        - piece (Array<number>)
        - position (number)
        - rotation (number)
*/

function generateRandomTetrominoe(arr) {
  //defino el objeto que devolverá la función
  let tetrominoeObject = {
    positionAtTetrominoeList: 0,
    piece: [],
    position: 0,
    rotation: 0,
  };
  //primero accedo al primer nivel de array
  const generateFirstLevelRandomNumber = Math.floor(Math.random() * arr.length);
  const selectRandomTetrominoe = arr[generateFirstLevelRandomNumber];

  //ahora accedo al segundo nivel de array
  const generateSecondLevelRandomNumber = Math.floor(
    Math.random() * selectRandomTetrominoe.length
  );
  const selectRandomPosition =
    selectRandomTetrominoe[generateSecondLevelRandomNumber];

  //asignar los valores a mi objeto
  tetrominoeObject.positionAtTetrominoeList = generateFirstLevelRandomNumber;
  tetrominoeObject.piece = selectRandomPosition;
  tetrominoeObject.position =
    generateFirstLevelRandomNumber === 0 &&
    generateSecondLevelRandomNumber === 1
      ? (tetrominoeObject.position = 3)
      : (tetrominoeObject.position = 4);

  console.log(tetrominoeObject.position);
  tetrominoeObject.rotation = generateSecondLevelRandomNumber;

  return tetrominoeObject;
}

//generateRandomTetrominoe(currentTetrominoe);

//------------------------------------------------

/**
 * CREO LA FUNCIÓN drawTetrominoeInMainBoard():
 *
 */
/**
 * Datos de entrada--> Objeto con las propiedades:
 *          - positionAtTetrominoeList (number)
            - piece (Array<number>)  Por ejemplo si tengo el array [0, 10, 11, 21]
            - position (number) Mi índice es 4
            - rotation (number)

            la posición de mi pieza en el tabelro será la [4,14,15,25]

    1. SAber el giro del tetromino. ¿Qué propiedad de mi objeto me lo puede dar?
            LA propiedad piece de mi objeto. Nos da la forma de la pieza

    2. ¿Qué posición ocupa en el tablero el giro del tetromino que nos entra?
            La propiedad position nos indica la posición del primer cuadrado de mi tetromino cuando entra al tablero
            PArece que sabiendo la posición (el índice) del primer cuadrado de mi pieza dentro del tablero, puedo 
            conseguir las demás posiciones, sumando ese índice a cada una de las posiciones iniciales.
 */

//cada elemento de la clase cell va a tener una clase del 0 al 199 que indicará la posicion de ese elemnento en el tablero
//de esta forma podremos seleccionar por el valor de esa clase. Es decir, nuestro div con la clase 4. lo seleccionaremos asi:
// document.querySelector('.${posición de nuestra pieza}') --> Lo haremos con un forEach

const objetTetromino = generateRandomTetrominoe(currentTetrominoe);

function drawTetrominoeInMainBoard(obj) {
  const fistPositionAtBoard = obj.piece.map((p) => p + obj.position); //defino el nuevo array con la posición de entrada al tabelro
  //Seleccionamos los div's de nuestro board a los que le asignaremos la clase opacity
  fistPositionAtBoard.forEach((p) => {
    const divDOM = document.getElementById(`${p}`);
    divDOM.classList.add("opacity");
  });
}

drawTetrominoeInMainBoard(objetTetromino);
