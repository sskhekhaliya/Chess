
export default function Queen(row, col, piece, positionColor){
    var positions = [ "R" + row + "C" + (col+1), 
                    "R" + row + "C" + (col-1),
                    "R" + (row+1) + "C" + (col-1),
                    "R" + (row+1) + "C" + col,
                    "R" + (row+1) + "C" + (col+1),
                    "R" + (row-1) + "C" + (col-1),
                    "R" + (row-1) + "C" + col,
                    "R" + (row-1) + "C" + (col+1),
                ];
    
    positions.forEach((e)=>{
        const el = document.getElementById(e);
        if(el){
            if(el.children[0]){
                if(!el.children[0].children[1].className.includes(piece.split("-")[0])){
                    el.style.backgroundColor = positionColor;
                }
            } else {
                el.style.backgroundColor = positionColor;
            }
        }
    });
}