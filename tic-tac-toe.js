// Layout of the board

window.onload = function() {
    const parentDiv = document.getElementById("board");
    const childDivs = parentDiv.getElementsByTagName("div");

    for (let i = 0; i < childDivs.length; i++) {
        childDivs[i].classList.add("square");
    }

    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    for (const div of childDivs) {
        div.addEventListener("click", function() {
            const index = Array.from(childDivs).indexOf(div);
            if (board[index] === '' && gameActive == true) {
                div.textContent = currentPlayer;
                board[index] = currentPlayer;
                div.classList.add(currentPlayer)
                if (winCheck()) {
                    document.getElementById('status').textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    document.getElementById('status').classList.add("you-won")
                    gameActive = false;
                  } 
                if (currentPlayer == 'X'){
                    div.classList.add("square.X");
                
                    }
                else if(currentPlayer == 'O') {
                    div.classList.add("square.O");
                    }
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';

                }
            //currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
              }
           );
        div.addEventListener("mouseover", function() {
        div.classList.add("hover");
        });
    
        div.addEventListener("mouseout", function() {
            div.classList.remove("hover");
        });

    }

    function winCheck() {
        const winConditions = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], 
          [0, 3, 6], [1, 4, 7], [2, 5, 8], 
          [0, 4, 8], [2, 4, 6]             
        ];
      
        for (const win of winConditions) {
          const [a, b, c] = win;
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
          }
        }
      
        return false;
      }

    const newGame = document.querySelector(".btn");
    newGame.addEventListener("click", function(){
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        //console.log("new game");
        document.getElementById('status').textContent = `Move your mouse over a square and click to play an X or an O.`;
        document.getElementById('status').classList.remove("you-won")
        const squares = document.querySelectorAll(".square")
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
          }) ;
          
  });
    


}


  