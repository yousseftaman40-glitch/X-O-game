'use strict'; 
let turn = "X";
let winner = "";
let win = document.querySelector(".win");
let role = document.querySelector(".turn");

function checkWin() {
    // 1. Get the FRESH values from the DOM every time checkWin is called
    let s1 = document.querySelector(".s1").innerHTML;
    let s2 = document.querySelector(".s2").innerHTML;
    let s3 = document.querySelector(".s3").innerHTML;
    let s4 = document.querySelector(".s4").innerHTML;
    let s5 = document.querySelector(".s5").innerHTML;
    let s6 = document.querySelector(".s6").innerHTML;
    let s7 = document.querySelector(".s7").innerHTML;
    let s8 = document.querySelector(".s8").innerHTML;
    let s9 = document.querySelector(".s9").innerHTML;

    const waysToWin = [
        [s1, s2, s3], [s4, s5, s6], [s7, s8, s9], // Rows
        [s1, s4, s7], [s2, s5, s8], [s3, s6, s9], // Cols
        [s1, s5, s9], [s3, s5, s7]               // Diagonals
    ];

    for (let combo of waysToWin) {
        if (combo[0] !== '' && combo[0] === combo[1] && combo[0] === combo[2]) {
            winner = combo[0]; 
            return winner;
        }
    }

    // Check for draw
    let allSquares = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
    if (allSquares.every(s => s !== '')) {
        winner = "draw";
        return winner;
    }

    return winner = "";
}

function game(id) {
    let element = document.getElementById(id);

    // If square is already taken or game is over, do nothing
    if (element.innerHTML !== '' || winner !== "") return;

    // Set the move
    element.innerHTML = turn;

    // Check for winner immediately after making a move
    checkWin();

    if (winner === "X" || winner === "O") {
        win.innerHTML = 'Winner:';
        role.innerHTML = winner;
        document.body.style.backgroundColor = (winner === 'X') ? 'rgb(49, 49, 241)' : 'rgb(243, 61, 61)';
    } else if (winner === "draw") {
        win.innerHTML = 'DRAW';
        role.innerHTML = '';
        document.body.style.backgroundColor = 'rgb(75, 79, 85)';
    } else {
        // No winner yet, switch turns
        turn = (turn === "X") ? "O" : "X";
        role.innerHTML = turn;
        // Optional: Change background color based on whose turn it is
        document.body.style.backgroundColor = (turn === 'X') ? 'rgb(49, 49, 241)' : 'rgb(243, 61, 61)';
    }
}
function restart() {
  window.location.reload();
}

