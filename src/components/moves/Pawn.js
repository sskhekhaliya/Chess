export default function Pawn(row, col, piece, positionColor){

    var positions;

    if(piece.split("-")[0] === "black"){

        positions = ["R" + (row+1) + "C" + (col-1),
        "R" + (row+1) + "C" + col,
        "R" + (row+1) + "C" + (col+1),
        "R" +(row+2) + "C" + col
        ];

    } else {
        positions = ["R" + (row-1) + "C" + (col-1),
        "R" + (row-1) + "C" + col,
        "R" + (row-1) + "C" + (col+1),
        "R" +(row-2) + "C" + col,
    ];
    }
    
    positions.forEach((e)=>{
        const el = document.getElementById(e);
        if(el){
            if(e === positions[0] || e === positions[2]){
                if(el.children[0]){
                    if(!el.children[0].children[1].className.includes(piece.split("-")[0])){
                        el.style.backgroundColor = positionColor;
                    }
                }
            } else if(e === positions[3]){
                if(((piece.includes("white") && row === 7) ||
                (piece.includes("black") && row === 2)) && !el.children[0]){
                    el.style.backgroundColor = positionColor;
                }
            } else {
                if(!el.children[0]){
                el.style.backgroundColor = positionColor;
            }
            }
        }
    });
}