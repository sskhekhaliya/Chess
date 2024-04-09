export default function Rook(row, col, piece, positionColor){

    //for Column
    for(let r = row-1; r >=1; r--){
        const column = document.getElementById("R" + r + "C" + col);
        if(!checkingFunction(r, col, piece, positionColor, column)){
            break;
        }
    }
    for(let r = row+1; r <=8; r++){
        const column = document.getElementById("R" + r + "C" + col);
        if(!checkingFunction(r, col, piece, positionColor, column)){
            break;
        }
    }

    //for Row
    for(let c = col-1; c >=1; c--){
        const column = document.getElementById("R" + row + "C" + c);
        if(!checkingFunction(c, row, piece, positionColor, column)){
            break;
        }
    }
    for(let c = col+1; c <=8; c++){
        const column = document.getElementById("R" + row + "C" + c);
        if(!checkingFunction(c, row, piece, positionColor, column)){
            break;
        }
    }

}

function checkingFunction(r, col, piece, positionColor, column){
    if(column){
        if(column.children[0]){
            if(!column.children[0].children[1].className.includes(piece.split("-")[0])){
                column.style.backgroundColor = positionColor;
            }
            return false;
        }
        column.style.backgroundColor = positionColor;
    }
    return true;
}
