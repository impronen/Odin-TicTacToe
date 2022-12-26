
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


/*  0 [1,2 / 4,8 / 3,6]
    1 [0,2 / 4,7]
    2 [0,1 / 5,8]
    3 [0,6 / 4,5]
    4 [3,5 / 1,7 / 0,8]
    5 [2,8 / 3,4]
    6 [0,3 / 7,8]
    7 [1,4 / 6,8]
    8 [6,8 / 1,4] */

    //Array for gameboard squares
    boardSquares: [
        {
            "ID": "A1",
            "mark": "X",
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


}



const gameController = {


    victoryChecker: function(currentPlayerMark, markedSquare) {

/*         currentPlayerMark = 'O';
        markedSquare = 1; */
        let win = false;

        switch(markedSquare){
            case 0:
                if(gameBoard['boardSquares'][1].mark === currentPlayerMark && gameBoard['boardSquares'][2].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][4].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][3].mark === currentPlayerMark && gameBoard['boardSquares'][6].mark === currentPlayerMark) {
                    console.log("WIN")
                    return win
                }
            case 1:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][2].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][4].mark === currentPlayerMark && gameBoard['boardSquares'][7].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                }
            case 2:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][1].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][5].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                }
            case 3:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][6].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][4].mark === currentPlayerMark && gameBoard['boardSquares'][5].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
            }
            case 4:
                if(gameBoard['boardSquares'][3].mark === currentPlayerMark && gameBoard['boardSquares'][5].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][1].mark === currentPlayerMark && gameBoard['boardSquares'][7].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark) {
                    console.log("WIN")
                    return win
                }
            case 5:
                if(gameBoard['boardSquares'][2].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][3].mark === currentPlayerMark && gameBoard['boardSquares'][4].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                }
            case 6:
                if(gameBoard['boardSquares'][0].mark === currentPlayerMark && gameBoard['boardSquares'][3].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][7].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                }
            case 7:
                if(gameBoard['boardSquares'][1].mark === currentPlayerMark && gameBoard['boardSquares'][4].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][6].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                }
            case 8:
                if(gameBoard['boardSquares'][6].mark === currentPlayerMark && gameBoard['boardSquares'][8].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                } else if (gameBoard['boardSquares'][1].mark === currentPlayerMark && gameBoard['boardSquares'][4].mark === currentPlayerMark){
                    win = true;
                    console.log("WIN")
                    return win
                }
        }
        }
    }


const playerFactory = (name, playerMark) => {
    return { name, playerMark}
}

let player1 = playerFactory("Bob", "X");
let player2 = playerFactory("Dylan", "O");


/* console.log(gameBoard['boardSquares'][1]); -- to access gameboard squares */