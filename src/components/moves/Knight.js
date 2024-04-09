export default function Knight(row, col, piece, positionColor){
    const allCols = document.querySelector(".chess-board").children;
    Array.from(allCols).forEach(e =>{
        var rPos = parseInt(e.id[1]);
        var cPos = parseInt(e.id[3])
        
        if( ((rPos === row-2 &&  (cPos === col+1 || cPos === col-1)) || (rPos === row+2 &&  (cPos === col+1 || cPos === col-1))) ||
        ((cPos === col-2 &&  (rPos === row+1 || rPos === row-1)) || (cPos === col+2 &&  (rPos === row+1 || rPos === row-1)))){
            if(!e.children[0]){
                e.style.backgroundColor = positionColor;
            } else {
                if(!e.children[0].children[1].className.includes(piece.split("-")[0])){
                    e.style.backgroundColor = positionColor;
                }
            }
        }
    });
}