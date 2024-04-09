export default function Bishop(row, col, piece, positionColor){
    
    var colCount = col-1;
    
    // for cross /:
    for(let r = row+1; r<=9; r++){
        const column = document.getElementById("R" + r + "C" + colCount);
        if(!checkingFunction(r, colCount, piece, positionColor, column)){
            break;
        }
        colCount--;
    } 

    colCount = col+1;
    for(let r = row-1; r>=1; r--){
        const column = document.getElementById("R" + r + "C" + colCount);
        if(!checkingFunction(r, colCount, piece, positionColor, column)){
            break;
        }
        colCount++;
    } 


    // for cross \:
    colCount = col+1;
    for(let r = row+1; r<=9; r++){
        const column = document.getElementById("R" + r + "C" + colCount);
        if(!checkingFunction(r, colCount, piece, positionColor, column)){
            break;
        }
        colCount++;
    } 

    colCount = col-1;
    for(let r = row-1; r>=1; r--){
        const column = document.getElementById("R" + r + "C" + colCount);
        if(!checkingFunction(r, colCount, piece, positionColor, column)){
            break;
        }
        colCount--;
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
