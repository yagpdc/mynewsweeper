let row = 10;
let col = 10;
let numBombs = 10;

const grid = document.querySelector(".grid");
const winCount = document.querySelector("#win_count");

let wins = 0;

if (typeof Storage !== "undefined") {
  wins = parseInt(localStorage.getItem("wins")) || 0;
} else {
  wins = 0;
}

winCount.textContent = wins;

const createGrid = () => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("hide");
      grid.appendChild(cell);
    }
  }
};
createGrid();

function gameControls() {
  let cells = document.querySelectorAll(".cell");
  
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.classList.remove("hide");
      if (!cell.classList.contains("flag")) {
        cell.style.pointerEvents = "none";
      }
      if (cell.textContent === "💣") {
        cell.style.backgroundColor = "red";
        [...cells].forEach((cell) => {
          cell.classList.remove("hide");
        });
        grid.style.pointerEvents = "none";
      }
    });
  });

  cells.forEach((cell) => {
    cell.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      cell.classList.toggle("flag");
      cell.classList.toggle("hide");

      if (cell.classList.contains("flag")) {
        numBombs--;
      } else {
        numBombs++;
      }
      if (
        numBombs === 0 &&
        cell.classList.contains("flag") &&
        cell.textContent === "💣"
      ) {
        alert("You Win");
        wins++;
        winCount.textContent = wins;
        localStorage.setItem("wins", wins.toString());

        [...cells].forEach((cell) => {
          cell.classList.remove("hide");
        });
        grid.style.pointerEvents = "none";
      }

      let bombDisplay = document.querySelector("#bomb_display");
      bombDisplay.textContent = numBombs;
    });
  });
  grid.style.pointerEvents = "auto";
}

gameControls();

function Game(row, col, numBombs) {
  let cells = document.querySelectorAll(".cell");

  arr = [];
  let increment = 0;
  const bombPositions = new Set();

  for (let i = 0; i < row; i++) {
    arr[i] = [];
    for (let j = 0; j < col; j++) {
      arr[i][j];
    }
  }

  while (bombPositions.size < numBombs) {
    let randomRow = Math.floor(Math.random() * row);
    let randomCol = Math.floor(Math.random() * col);
    const bombPosition = `${randomRow}-${randomCol}`;

    if (!bombPositions.has(bombPosition)) {
      bombPositions.add(bombPosition);
      arr[randomRow][randomCol] = "💣";
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] !== "💣") {
        increment = "";
        
        if (i > 0 && j > 0 && arr[i - 1][j - 1] === "💣") {
          increment++;
        }
        if (i > 0 && arr[i - 1][j] === "💣") {
          increment++;
        }
        if (i > 0 && j < col - 1 && arr[i - 1][j + 1] === "💣") {
          increment++;
        }
        if (j > 0 && arr[i][j - 1] === "💣") {
          increment++;
        }
        if (j < col - 1 && arr[i][j + 1] === "💣") {
          increment++;
        }
        if (i < row - 1 && j > 0 && arr[i + 1][j - 1] === "💣") {
          increment++;
        }
        if (i < row - 1 && arr[i + 1][j] === "💣") {
          increment++;
        }
        if (i < row - 1 && j < col - 1 && arr[i + 1][j + 1] === "💣") {
          increment++;
        }

        arr[i][j] = increment;
      }
    }
  }

  let bombDisplay = document.querySelector("#bomb_display");
  bombDisplay.textContent = numBombs;

  let cellIndex = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      cells[cellIndex].textContent = arr[i][j];
      cellIndex++;
    }
  }

  cells.forEach((cell) => {
    switch (cell.textContent) {
      case "1":
        cell.classList.add("one");
        break;
      case "2":
        cell.classList.add("two");
        break;
      case "3":
        cell.classList.add("three");
        break;
      case "4":
        cell.classList.add("four");
        break;
      case "5":
        cell.classList.add("five");
        break;
      case "6":
        cell.classList.add("six");
        break;
      case "7":
        cell.classList.add("seven");
        break;
      case "8":
        cell.classList.add("eight");
        break;
    }
  });
}

function restart() {
  grid.innerHTML = "";
  numBombs = 10;
  createGrid();
  Game(row, col, numBombs);
  gameControls();
  winCount.textContent = wins;
}

Game(10, 10, 10);


