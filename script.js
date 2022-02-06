
const boardWidth = 10;
const boardHeight = 20;


const divBody = document.createElement('div');
divBody.classList.add('body_container');
document.body.appendChild(divBody);

const headerEl = document.createElement('header');
divBody.appendChild(headerEl);

const divBodyHeader = document.createElement('div');
divBodyHeader.classList.add('body_container--header');
headerEl.appendChild(divBodyHeader);

const divLogo = document.createElement('div');
divLogo.classList.add('body_container--logo');
divBodyHeader.appendChild(divLogo);

const imgHeader = document.createElement('img');
imgHeader.classList.add('body_container--img');
imgHeader.src = './src/tetris-logo.jpg';
divLogo.appendChild(imgHeader);

const mainEl = document.createElement('main');
divBody.appendChild(mainEl);

const divMain = document.createElement('div');
divMain.classList.add('main');
mainEl.appendChild(divMain);

const divMainSplit = document.createElement('div');
divMainSplit.classList.add('main_split');
divMain.appendChild(divMainSplit);

const divContainerTetris = document.createElement('div');
divContainerTetris.classList.add('container_tetris');
divMainSplit.appendChild(divContainerTetris);

// El de arriba es el div que contiene los 200 divs con los 200 mini divs dentro.

drawBoard('cells','cells_padding',boardWidth,boardHeight);

function drawBoard(mainContainerClass,secondContainerClass,width,heigth) {

    for (let i = 1; i <= width*heigth; i++) {
        const drawBoardOutboardCells = document.createElement('div');
        drawBoardOutboardCells.classList.add(mainContainerClass);
        divContainerTetris.appendChild(drawBoardOutboardCells);

        const drawBoardInnerCells = document.createElement('div');
        drawBoardInnerCells.classList.add(secondContainerClass);
        drawBoardOutboardCells.appendChild(drawBoardInnerCells);

    }

}

//------------------------------------------------------------------------------------

const divMini = document.createElement('div');
divMini.classList.add('mini_container');
divMain.appendChild(divMini);

const scoreh3 = document.createElement('h3');
scoreh3.textContent = 'Score';
scoreh3.classList.add('mini_container--score');
divMini.appendChild(scoreh3);

const scoreCounter = document.createElement('div');
scoreCounter.textContent = '0';
scoreCounter.classList.add('mini_container--number');
divMini.appendChild(scoreCounter);

const divMiniGrid = document.createElement('div');
divMiniGrid.classList.add('mini_container--grid');
divMini.appendChild(divMiniGrid);


// el de arriba es el div que contiene los 16 divs con los 16 mini divs dentro. El minigrid va de 58-59
drawMiniBoard()

function drawMiniBoard() {

    for (let i = 1; i <= 16; i++) {
        const drawBoardOutboardCells = document.createElement('div');
        drawBoardOutboardCells.classList.add('cells');
        divMiniGrid.appendChild(drawBoardOutboardCells);



        const drawBoardInnerCells = document.createElement('div');
        drawBoardInnerCells.classList.add('cells_padding');
        drawBoardOutboardCells.appendChild(drawBoardInnerCells);

    }

}
//------------------------------------------------

const div3Arrows = document.createElement('div');
div3Arrows.classList.add('mini_container--arrows');
divMini.appendChild(div3Arrows);

const left = document.createElement('i');
left.classList.add('fas', 'fa-arrow-left');
div3Arrows.appendChild(left);

const right = document.createElement('i');
right.classList.add('fas', 'fa-arrow-right');
div3Arrows.appendChild(right);

const down = document.createElement('i');
down.classList.add('fas', 'fa-arrow-down');
div3Arrows.appendChild(down);

const span = document.createElement('span');
span.classList.add('move');
span.textContent = 'Move';
div3Arrows.appendChild(span);

const divRotate = document.createElement('div');
divRotate.classList.add('mini_container--rotate');
divMini.appendChild(divRotate);

const up = document.createElement('i');
up.classList.add('fas', 'fa-arrow-up');
divRotate.appendChild(up);

const rotate = document.createElement('span');
rotate.classList.add('rotate');
rotate.textContent = 'Rotate';
divRotate.appendChild(rotate);


// console.log(divBody);