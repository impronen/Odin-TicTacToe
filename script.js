
//Gameboard
const gameBoard = {

    //Function to change values in boardSquares object array (not complete)
/*     markChanger1: function() {
        let targetIndex = boardSquares.find("ID" === "A1");
        console.log(targetIndex);
    }, */

    //Array for gameboard squares
    boardSquares: [
        {
            "ID": "A1",
            "mark": 0,
        },
        {
            "ID": "B1",
            "mark": 0,  
        },
        {
            "ID": "C1",
            "mark": 0,  
        },
        {
            "ID": "A2",
            "mark": 0,  
        },
        {
            "ID": "B2",
            "mark": 0,  
        },
        {
            "ID": "C2",
            "mark": 0,  
        },
        {
            "ID": "A3",
            "mark": 0,  
        },
        {
            "ID": "B3",
            "mark": 0,  
        },
        {
            "ID": "C3",
            "mark": 0,  
        },
        
    ]
}



const playerFactory = (name, playerMark) => {
    return { name, playerMark}
}

let player1 = playerFactory("Bob", "X");
let player2 = playerFactory("Dylan", "O");


/* console.log(gameBoard['boardSquares'][1]); -- to access gameboard squares */


const markChanger = (() => {
    const change = (index, playerMark) => /* function that matches the index on gameBoard and places playerMark as mark*/
})();