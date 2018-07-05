var currentPlayer = "black";
var nextplayer = "red";

var playerblackSelections = new Array();
var playerredSelections = new Array();



const winningCombinations = [
    [37,38,39,40],
    [31,32,33,34],
    [25,26,27,28],
    [19,20,21,22],
    [13,14,15,16],
    [7,8,9,10],
    [1,2,3,4],
    [42,41,40,39],
    [36,35,34,33],
    [30,29,28,27],
    [24,23,22,21],
    [18,17,16,15],
    [12,11,10,9],
    [6,5,4,3],
    [37,31,25,19],
    [38,32,26,20],
    [39,33,26,21],
    [40,34,27,22],
    [41,35,28,23],
    [42,36,29,24],
    [31,25,19,13],
    [32,26,20,14],
    [33,27,21,15],
    [34,28,22,16],
    [35,29,23,17],
    [36,30,24,18],
    [25,19,13,7],
    [26,20,13,8],
    [27,21,14,9],
    [28,22,15,10],
    [29,23,26,11],
    [30,24,27,12],
    [19,13,7,1],
    [20,14,8,2],
    [21,15,9,3],
    [22,16,10,4],
    [23,17,11,5],
    [24,18,12,6],
    [1,8,15,22],
    [42,35,28,21],
    [37,32,27,22],
    [6,11,16,21],
    [2,9,16,23],
    [3,10,17,24],
    [4,9,14,19],
    [5,10,15,20],
    [12,17,22,27],
    [24,17,10,3],
    [18,23,28,33],
    [36,29,22,15],
    [30,23,16,9],
    [42,35,28,21],
    [39,34,29,24],
    [40,33,26,19],
    [31,26,21,16],
    [25,20,15,10],
    [19,14,9,4],
    [7,14,21,28],
    [24,29,34,39],
    [40,33,26,19],
    [38,33,28,23],
    [13,20,27,34],
    [11,16,21,26],
    [10,15,20,25],
    [17,22,27,32],
    [23,28,33,38],
    [22,27,34,41],
    [8,15,22,29],
    [16,21,26,31],
    [2,3,4,5],
    [8,9,10,11],
    [14,15,16,17],
    [20,21,22,23],
    [26,27,28,29],
    [32,33,34,35],
    [38,39,40,41]
    ]

    handleClick = function(event) {
        var cell = event.target;
      
        cell.innerHTML = currentPlayer;
      
        if(currentPlayer === "black" ) {
          playerSelections = playerblackSelections;
          nextPlayer = "red";
        } else {
          playerSelections = playerredSelections;
          nextPlayer = "black";
        }
      
        playerSelections.push(parseInt(cell.id));
      
        if(checkWinner(playerSelections)) {
          alert("Player " + currentPlayer + " wins!")
          resetGame();
        }
    

    currentPlayer = nextPlayer;
    }

var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

    function checkWinner(playerSelections) {

        for (var i = 0; i < winningCombinations.length; i++) {
            var matches = 0;
            for (var j = 0; j < winningCombinations[i].length; j++) {
                if (playerSelections.includes(winningCombinations[i][j])) {
                    matches++
                } else break;
    
                if (matches == 4)
                    return true
            }
        }
    
        return false
    }
