
var rotation = 0;

function RotateRight(){
    clearSelection()
    const chessBoard = document.getElementById("board");
    
    var changedRotation = rotation + 90
    chessBoard.style.transform = "rotate(" + changedRotation + "deg)";
    rotation = changedRotation;
    resetRotation();
}

function RotateLeft(){
    clearSelection()
    const chessBoard = document.getElementById("board");

    var changedRotation = rotation - 90
    chessBoard.style.transform = "rotate(" + changedRotation + "deg)";
    rotation = changedRotation;
    resetRotation();
}

function HideShow(){
    const el = document.getElementById("controls");
    const btn = document.getElementById("controls-visible-btn");
    if(el.style.display !== "none"){
        el.style.display = "none";
        btn.children[0].innerText = "visibility";
    } else {
        el.style.display = "";
        btn.children[0].innerText = 'visibility_off';
    }

}

function resetRotation(){
    if(rotation===360 || rotation === -360){
        rotation = 0;
    }
}

function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}


export {RotateRight, RotateLeft, HideShow};



