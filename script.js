
//Gameboard
const gameBoard = {

    //Function to change values in boardSquares object array (not complete)
     markChanger1: function(index, playerMark) {
        gameBoard['boardSquares'][index].mark = playerMark; //Mark in index changes
        console.log(gameBoard['boardSquares']);
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
        
    ]
}



const playerFactory = (name, playerMark) => {
    return { name, playerMark}
}

let player1 = playerFactory("Bob", "X");
let player2 = playerFactory("Dylan", "O");


/* console.log(gameBoard['boardSquares'][1]); -- to access gameboard squares */


/* const markChanger = (() => {
    const change = (index, playerMark) => /* function that matches the index on gameBoard and places playerMark as mark*/