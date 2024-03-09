let player1 = "#f55858";
let player2 = "#58f599";
let currPlayer = player1;
let gameOver = false;
let board = [];

const rows = 6;
const cols = 7;

window.onload = function () {
  setBoard();
};

function setBoard() {
  for (let r = 0; r < rows; r++) {
    let boardRow = [];
    for (let c = 0; c < cols; c++) {
      let block = document.createElement("div");
      block.id = r.toString() + "-" + c.toString();
      block.classList.add("block");
      block.addEventListener("click", markBoard);
      document.getElementById("board").appendChild(block);
      boardRow.push(0);
    }
    board.push(boardRow);
  }
}

function markBoard() {
  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  // console.log(coords);
  if (gameOver || board[r][c] == 1 || (r + 1 < rows && board[r + 1][c] == 0)) {
    return;
  }

  if (currPlayer == player1) {
    board[r][c] = 1;
    this.style.backgroundColor = player1;
    currPlayer = player2;
    document.getElementById("player1").classList.remove("active");
    document.getElementById("player2").classList.add("active");
  } else {
    board[r][c] = 2;
    this.style.backgroundColor = player2;
    currPlayer = player1;
    document.getElementById("player2").classList.remove("active");
    document.getElementById("player1").classList.add("active");
  }
  checkWinner();
}

function checkWinner() {
  // check horizontally
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (
        board[r][c] == board[r][c + 1] &&
        board[r][c] == board[r][c + 2] &&
        board[r][c] == board[r][c + 3] &&
        board[r][c] != 0
      ) {
        document.getElementById(
          r.toString() + "-" + c.toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          r.toString() + "-" + (c + 1).toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          r.toString() + "-" + (c + 2).toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          r.toString() + "-" + (c + 3).toString()
        ).style.backgroundColor = "gold";

        gameOver = true;
        if (board[r][c] == 1) {
          document.getElementById("player1").classList.add("winner");
          document.getElementById("player2").classList.remove("active");
        } else {
          document.getElementById("player2").classList.add("winner");
          document.getElementById("player1").classList.remove("active");
        }
        return;
      }
    }
  }

  // check vertically
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      if (
        board[r][c] == board[r + 1][c] &&
        board[r][c] == board[r + 2][c] &&
        board[r][c] == board[r + 3][c] &&
        board[r][c] != 0
      ) {
        gameOver = true;
        document.getElementById(
          r.toString() + "-" + c.toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r + 1).toString() + "-" + c.toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r + 2).toString() + "-" + c.toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r + 3).toString() + "-" + c.toString()
        ).style.backgroundColor = "gold";
        if (board[r][c] == 1) {
          document.getElementById("player1").classList.add("winner");
          document.getElementById("player2").classList.remove("active");
        } else {
          document.getElementById("player2").classList.add("winner");
          document.getElementById("player1").classList.remove("active");
        }
        return;
      }
    }
  }

  // check diagonally
  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (
        board[r][c] == board[r + 1][c + 1] &&
        board[r][c] == board[r + 2][c + 2] &&
        board[r][c] == board[r + 3][c + 3] &&
        board[r][c] != 0
      ) {
        document.getElementById(
          r.toString() + "-" + c.toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r + 1).toString() + "-" + (c + 1).toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r + 2).toString() + "-" + (c + 2).toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r + 3).toString() + "-" + (c + 3).toString()
        ).style.backgroundColor = "gold";

        gameOver = true;
        if (board[r][c] == 1) {
          document.getElementById("player1").classList.add("winner");
          document.getElementById("player2").classList.remove("active");
        } else {
          document.getElementById("player2").classList.add("winner");
          document.getElementById("player1").classList.remove("active");
        }
        return;
      }
    }
  }

  // check anti-diagonally
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      if (
        board[r][c] == board[r - 1][c + 1] &&
        board[r][c] == board[r - 2][c + 2] &&
        board[r][c] == board[r - 3][c + 3] &&
        board[r][c] != 0
      ) {
        document.getElementById(
          r.toString() + "-" + c.toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r - 1).toString() + "-" + (c + 1).toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r - 2).toString() + "-" + (c + 2).toString()
        ).style.backgroundColor = "gold";
        document.getElementById(
          (r - 3).toString() + "-" + (c + 3).toString()
        ).style.backgroundColor = "gold";

        gameOver = true;
        if (board[r][c] == 1) {
          document.getElementById("player1").classList.add("winner");
          document.getElementById("player2").classList.remove("active");
        } else {
          document.getElementById("player2").classList.add("winner");
          document.getElementById("player1").classList.remove("active");
        }
        return;
      }
    }
  }
}
