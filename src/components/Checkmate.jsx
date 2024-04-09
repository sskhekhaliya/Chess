import CheckmateAudio from "../assets/sounds/checkmate.mp3"
import ChessMoves from "./moves/ChessMoves";

export default function Checkmate(click, positionColor, chance){

    const allCols = document.querySelector(".chess-board").children;
    const el = document.getElementById(click.id);

    if(el){
        if(el.children[0]){
            const row = parseInt(el.id[1]);
            const col = parseInt(el.id[3]);
            const piece = el.children[0].children[1].className;
            
            ChessMoves(row, col, piece, positionColor);

            const king = document.querySelector("." + chance + "-player.king").parentElement.parentElement;
            if(king.style.backgroundColor === positionColor){
                king.style.backgroundColor = "#f14c4c";
                let audio = new Audio(CheckmateAudio);
                audio.play();
            } else {
                king.style.backgroundColor = "";
            }

            Array.from(allCols).forEach(element => {
                if(element.style.backgroundColor === positionColor){
                    element.style.backgroundColor = "";
                }
            });
    
        }
    }
}