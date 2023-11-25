let color = 'black';
let click = true;

function populateBoard(size){
    let board = document.querySelector('.board');
    let squares= board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mousemove', colorSquares);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

//function to change the size of the squares in the board.
function changeSize(input){
    if( input >= 2 && input <= 100)
    {
        populateBoard(input);
    }
    else
    {
        alert("Invalid amount, reinput square size!");
    }
}

//function that colors all the squares.
function colorSquares(){
    if(click)
    {
        if(color === 'random')
        {
            this.style.backgroundColor  = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
        else
        {
            this.style.backgroundColor = color;
        }
    }
}

//function to change the color of the pen
function changeColor(changedColor){
    color = changedColor;
}

//function that resets the sketch board
function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector(".board").addEventListener('click', () => {
    click = !click;
    if(click){
        document.querySelector(".mode").innerHTML = "<h3>Mode: Coloring</h3>"
    }
    else(
        document.querySelector(".mode").innerHTML= "<h3>Mode: Not Coloring</h3>"
    )
})
