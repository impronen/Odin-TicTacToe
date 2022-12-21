let gameBoard = {
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



const playerFactory = (name, mark) => {
    return { name, mark}
}

let player1 = playerFactory("Bob", "X");
let player2 = playerFactory("Dylan", "O");
