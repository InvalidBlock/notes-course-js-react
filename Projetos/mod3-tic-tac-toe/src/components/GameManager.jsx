import { useState } from "react"
import Square from "./Square.jsx"
import './GameManager.css'

function calculateWinner(squares) {
    const lines = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function GameManager() {
    // Board
    const [squares, setSquares] = useState(Array(9).fill(null));

    //  [
    //  null, null, null
    //  null,  X, null
    //  null, null, O
    //  ]

    // Turn
    const [xIsNext, setXIsNext] = useState(true);
    // New Round Button
    let newRound = false;

    // Function to handle a click on a square
    function handleClick(i) {
        if (squares[i] || winner) return; // Verify if the square is already filled or if there is a winner
        // If game over, do nothing
        const newSquares = [...squares];
        // If xIsNext is true, put "X", else put "O"
        newSquares[i] = xIsNext ? "X" : "O";
        // Set the copy before updating the state of the squares
        setSquares(newSquares);
        // Toggle the turn
        setXIsNext(!xIsNext);

        console.log(newSquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {

        status = "Vencedor: " + winner;
        newRound = false;

    } else if (!squares.includes(null)) {

        status = "Empate";
        newRound = false;

    } else {

        status = "Próximo jogador: " + (xIsNext ? "X" : "O");
        newRound = true;

    }

    return (
        <div className="game">
            <h1>Tic Tac Toe</h1>
            <div className="status">{status}!</div>
            <div className="board">
                <div className="row">
                    {[0, 1, 2].map((i) => <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />)}
                    {/** parameter value is the square value, onClick is the function to handle the click, where is the index "0" */}
                </div>
                <div className="row">
                    {[3, 4, 5].map((i) => <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />)}
                    {/** parameter value is the square value, onClick is the function to handle the click, where is the index "0" */}
                </div>
                <div className="row">
                    {[6, 7, 8].map((i) => <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />)}
                    {/** parameter value is the square value, onClick is the function to handle the click, where is the index "0" */}
                </div>
            </div>
            {!newRound ? <button className="reset" onClick={() => { setSquares(Array(9).fill(null)); setXIsNext(true); }}>Novo Jogo</button> : null}
        </div>
    )
}

export default GameManager