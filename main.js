// create a chess board fill up with 0 et 1 in a 2D array

// variable declaration zone 

let numOfCase = 8;
let board = []

// let chessboard = document.getElementById('chessboard')

// CODE version 1 

for(let i = 0 ; i < numOfCase; i++){

  board[i] = []

  let div = document.createElement("div");  
  div.classList.add("line");
  div.setAttribute("id", i)
  document.getElementById("chessboard").appendChild(div)

  let black ;
  if (i % 2 === 0){
    black = true;
  } else {
    black = false;
  }

  for(let j = 0; j < numOfCase; j++){

    let cell = document.createElement("div");  
    cell.classList.add("column"); 
    document.getElementById(i).appendChild(cell)
    
    
    
    if (black === true) {
      board[i][j] = 0
      //let textcell = document.createTextNode(black); 
      //cell.appendChild(textcell); 
      cell.classList.add("black")
    } else {
      board[i][j] = 1
      //let textcell = document.createTextNode(black); 
      //cell.appendChild(textcell); 
      cell.classList.add("white")
    }
    black = !black
  }
}



