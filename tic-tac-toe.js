// Layout of the board

window.onload = function() {
    const parentDiv = document.getElementById("board");
    const childDivs = parentDiv.getElementsByTagName("div");

    for (let i = 0; i < childDivs.length; i++) {
        childDivs[i].classList.add("square");
    }

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    for (const div of childDivs) {
        div.addEventListener("click", function() {
            const index = Array.from(childDivs).indexOf(div);
            if (gameBoard[index] === '' && gameActive == true) {
                div.textContent = currentPlayer;
                //gameBoard[index] = currentPlayer;
                div.classList.add(currentPlayer)
                if (currentPlayer == 'X'){
                    div.classList.add("square.X");
                
                    }
                else if(currentPlayer == 'O') {
                    div.classList.add("square.O");
                    }

                }
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
              }
           );
        div.addEventListener("mouseover", function() {
        div.classList.add("hover");
        });
    
        div.addEventListener("mouseout", function() {
            div.classList.remove("hover");
        });

}
}


  