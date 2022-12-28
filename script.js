//Factory to assing values for players
const playerFactory = (name, playerMark) => {
    return { name, playerMark}
}

let player1 = playerFactory("Bob", "X");
let player2 = playerFactory("Dylan", "O");

let currenPlayer = player1;

let startButton = document.getElementById("start-game")


//Gameboard
const gameBoard = {

    //Function to change values in boardSquares object array
     markChanger1: function(index, playerMark) {
        gameBoard['boardSquares'][index].mark = playerMark;
        console.log(gameBoard['boardSquares']);
        let latestChanged = gameBoard['boardSquares'][index].ID
        let latestIndex = index;
        console.log(latestIndex)
        return latestIndex, latestChanged;
    },


    //Array for gameboard squares
    boardSquares: [
        {
            "ID": "A1",
            "mark": "",
        },
        {
            "ID": "B1",
            "mark": "",  
        },
        {
            "ID": "C1",
            "mark": "",  
        },
        {
            "ID": "A2",
            "mark": "",  
        },
        {
            "ID": "B2",
            "mark": "",  
        },
        {
            "ID": "C2",
            "mark": "",  
        },
        {
            "ID": "A3",
            "mark": "",  
        },
        {
            "ID": "B3",
            "mark": "",  
        },
        {
            "ID": "C3",
            "mark": "",  
        },
        
    ],
    //Dynamic board rendering with ID's corresponding to boardSquares
    boardRenderer: function() {
        let gameBoardDiv = document.querySelector(".game-board")
        for (const property in gameBoard['boardSquares']) {
            /* console.log(`Creating square ${property}`); */
            let square = document.createElement("div")
            square.className = "gameGrid"
            square.setAttribute('id',`${property}`)
            gameBoardDiv.appendChild(square)
        }
    },

    currentPlayerRender: function() {
        let mainDIv = document.querySelector(".main")
        let currentPlayerDisplayer = document.createElement("div")
        let oldChild = document.querySelector(".current-player")
        currentPlayerDisplayer.className = "current-player"
        currentPlayerDisplayer.innerHTML = `It's ${currenPlayer.name}'s turn`
        mainDIv.replaceChild(currentPlayerDisplayer, oldChild)
    },

}

gameBoard.boardRenderer();

const gameController = {

    //Function to for player to take their turn
    playTurn: function() {
        console.log(currenPlayer)
        
        let selectedCell = document.querySelectorAll(".gameGrid")

        selectedCell.forEach((item) => {
            item.addEventListener('click', (e) => {
                console.log(e.srcElement.id)
                let chosenIndex = e.srcElement.id
                console.log("WHEE")
                gameBoard.markChanger1(chosenIndex, currenPlayer.playerMark) //Update object arrau
                gameController.domSquareUpdater(chosenIndex, currenPlayer.playerMark) //Update DOM
                gameController.switchCurrentPlayer(currenPlayer) //Switch to other player
                gameBoard.currentPlayerRender(currenPlayer)
            })
        })
        
        
    },
    //Function to place players mark to the DOM element
    domSquareUpdater: function(index, playerMark){
        console.log(playerMark)
        document.getElementById(index).innerHTML = playerMark
    },

    switchCurrentPlayer: function() {
        console.log(currenPlayer)
        if (currenPlayer.playerMark === "X") {currenPlayer = player2}
        else if (currenPlayer.playerMark === "O") {currenPlayer = player1}
        console.log(currenPlayer)
        return currenPlayer
    },

    //Changes the names of the players to ones in input boxes
    nameUpdater: function() {
        let player1Name = document.getElementById("player1_name").value
        let player2Name = document.getElementById("player2_name").value
        player1.name = player1Name
        player2.name = player2Name
    },

    //Function to check victory conditions
    victoryChecker: function(currentPlayerMark, markedSquare) {
        let win = false;

        switch(markedSquare){
            case 0:
                if(gameBoard['boardSquares'][1].mark === currentPlayerMark && gameBoard['boardSquares'][2].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 0")
                    return win
                } else if (gameBoard['boardSquares'][4].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 0")
                    return win
                } else if (gameBoard['boardSquares'][3].mark === currentPlayerMark && gameBoard['boardSquares'][6].mark === currentPlayerMark) {
                    win = true;
                    console.log("WIN 0")
                    return win
                }
            case 1:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][2].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 1")
                    return win
                } else if (gameBoard['boardSquares'][4].mark === currentPlayerMark && gameBoard['boardSquares'][7].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 1")
                    return win
                }
            case 2:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][1].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 2")
                    return win
                } else if (gameBoard['boardSquares'][5].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 2")
                    return win
                }
            case 3:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][6].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 3")
                    return win
                } else if (gameBoard['boardSquares'][4].mark === currentPlayerMark && gameBoard['boardSquares'][5].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 3")
                    return win
            }
            case 4:
                if(gameBoard['boardSquares'][3].mark === currentPlayerMark && gameBoard['boardSquares'][5].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 4")
                    return win
                } else if (gameBoard['boardSquares'][1].mark === currentPlayerMark && gameBoard['boardSquares'][7].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 4")
                    return win
                } else if (gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark) {
                    win = true;
                    console.log("WIN 4")
                    return win
                }
            case 5:
                if(gameBoard['boardSquares'][2].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 5")
                    return win
                } else if (gameBoard['boardSquares'][3].mark === currentPlayerMark && gameBoard['boardSquares'][4].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 5")
                    return win
                }
            case 6:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][3].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 6")
                    return win
                } else if (gameBoard['boardSquares'][7].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 6")
                    return win
                }
            case 7:
                if(gameBoard['boardSquares'][1].mark === currentPlayerMark && gameBoard['boardSquares'][4].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 7")
                    return win
                } else if (gameBoard['boardSquares'][6].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 7")
                    return win
                }
            case 8:
                if(gameBoard['boardSquares'][6].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 8")
                    return win
                } else if (gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][4].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN 8")
                    return win
                }
            }
        }, //victoryChecker ends here



}


startButton.addEventListener('click', () => {
gameController.playTurn()
gameController.nameUpdater()
gameBoard.currentPlayerRender(currenPlayer)
});

/* console.log(gameBoard['boardSquares'][1]); -- to access gameboard squares */