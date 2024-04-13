import Checkmate from "./Checkmate";
import ChessMoves from "./moves/ChessMoves";
import WinAudio from "../assets/sounds/win.wav"

const positionColor = "rgba(118, 251, 100, 0.43)";
const chekmateColor = "rgb(241, 76, 76)";
var chance = "white";

function Play(e) {

  const allCols = document.querySelector(".chess-board").children;

  if (e.target.parentElement.className === "piece-box") {
    const parentCol = e.target.parentElement.parentElement;

    if (localStorage.getItem("chessPiece") && parentCol.id !== localStorage.getItem("chessPiece") && parentCol.style.backgroundColor === positionColor) {
      piecesPattern(e);
    } else {
      const click = e.target.parentElement.parentElement;

      const id = click.id;
      const row = parseInt(id[1]);
      const col = parseInt(id[3]);

      const piece = click.children[0].children[1].className;

      if (piece.includes(chance)) {

        localStorage.setItem("chessPiece", id);
        localStorage.setItem("old_position", id);

        const piece = click.children[0].children[1].className;
  
        piecePositions(allCols, id);
        ChessMoves(row, col, piece, positionColor);
      } else {
        piecePositions(allCols, id);
      }
    }
  } else {
    piecesPattern(e);
  }
}

function piecePositions(allCols, id){
  Array.from(allCols).forEach(element => {
    if (element.style.backgroundColor !== chekmateColor) {
      element.style.backgroundColor = "";
    }
    if (element.id === id) {
      element.style.backgroundColor = positionColor;
    }
  });
}

function piecesPattern(e) {

  const allCols = document.querySelector(".chess-board").children;
  const click = e.target;
  const selectedID = localStorage.getItem("chessPiece");
  const blackContainer = document.getElementById("black-collector");
  const whiteContainer = document.getElementById("white-collector");
  const winner = document.getElementById("winner");

  //storing new & old positions for undo:
  // Retrieve the existing array from localStorage if there is no then [] empty array
  const existingHistory = JSON.parse(localStorage.getItem('history')) || []
  // new history to be added to the existing array: [old_position, new_position]
  const new_history = [localStorage.getItem("old_position"), click.id]
  // adding new history to the existing array  
  const updatedHistory = [...existingHistory, new_history];
  // storing the updated array back to localStorage
  localStorage.setItem('history', JSON.stringify(updatedHistory));

  if (click.parentElement.className === "piece-box" && click.parentElement.parentElement.style.backgroundColor === positionColor) {

    //removing lossed chess pieces and collecting them into container
    const existingOutPieces = JSON.parse(localStorage.getItem('out')) || []

    const parentEle = click.parentElement.parentElement;
    parentEle.children[0].classList.add(parentEle.id+"-"+existingOutPieces.length+1)

    existingOutPieces.push(parentEle.id+ "-" + existingOutPieces.length+1)
    localStorage.setItem('out', JSON.stringify(existingOutPieces));

    if (click.nextSibling.className.includes("black")) {
      whiteContainer.appendChild(click.parentElement);
    } else {
      blackContainer.appendChild(click.parentElement);
    }
    
    //Winning Checking
    let winingAudio = new Audio(WinAudio);
    if (click.nextSibling.className === "black-player king") {
      winner.children[0].innerText = "White WIN!";
      winner.style.display = "flex";
      winingAudio.play();
    } else if (click.nextSibling.className === "white-player king") {
      winner.children[0].innerText = "Black WIN!";
      winner.style.display = "flex";
      winingAudio.play();
    }

    parentEle.click();

  } else if (click.style.backgroundColor === positionColor) {
    const selectedPiece = document.getElementById(selectedID).children[0];
    click.appendChild(selectedPiece);
    chance === "white" ? chance = "black" : chance = "white";
  }

  Array.from(allCols).forEach(element => {
    if (element.style.backgroundColor !== chekmateColor) {
      element.style.backgroundColor = "";
    }
  });

  //Checkmate
  Checkmate(click, positionColor, chance);
  localStorage.removeItem("chessPiece");
}

function Undo() {
  // Check if 'history' exists in localStorage
  if (localStorage.getItem("history") === null) {
      return;
  }
  // Retrieve move history from localStorage
  let existingHistory = JSON.parse(localStorage.getItem('history'));

  // Ensure existingHistory is not null or undefined
  if (!existingHistory || existingHistory.length === 0) {
      return;
  }

  // Get the last move from the history
  const lastHistoryIndex = existingHistory.length - 1;
  const lastHistory = existingHistory[lastHistoryIndex];

  // Remove the last move from the history
  existingHistory.pop();
  localStorage.setItem('history', JSON.stringify(existingHistory));

  const old_position_id = lastHistory[0]; // where the last moved piece was
  const current_position_id = lastHistory[1]; // current position of the last moved piece

  const currentPiece = document.getElementById(current_position_id)?.children[0];
  const old_position = document.getElementById(old_position_id);

  // Move the last moved piece back to its old position
    old_position.appendChild(currentPiece);

    if (existingHistory.length != 0 && existingHistory[existingHistory.length - 1][1] === "") {
      const lastOutPieces = JSON.parse(localStorage.getItem('out'));
      const lastOutPiece = document.querySelector("." + lastOutPieces[lastOutPieces.length - 1]);
      const lastOutPiecePosition = document.getElementById(existingHistory[existingHistory.length - 2][1]);
      console.log(lastOutPiecePosition);
      lastOutPiecePosition.appendChild(lastOutPiece);
      lastOutPiece.classList.remove(lastOutPieces[lastOutPieces.length - 1]);
      existingHistory.pop();
      lastOutPieces.pop();
      localStorage.setItem('history', JSON.stringify(existingHistory));
      localStorage.setItem('out', JSON.stringify(lastOutPieces));
    }

  chance = (chance === "white") ? "black" : "white";
}

export {Play, Undo};