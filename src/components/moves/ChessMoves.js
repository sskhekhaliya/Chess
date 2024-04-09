import Pawn from "./Pawn";
import Knight from "./Knight";
import Rook from "./Rook";
import Bishop from "./Bishop";
import Queen from "./Queen";
import King from "./King";

export default function ChessMoves(row, col, piece, positionColor){
        if(piece.includes("pawn")){
            Pawn(row, col, piece, positionColor);
        } else if(piece.includes("knight")){
            Knight(row, col, piece, positionColor);
        } else if(piece.includes("rook")){
            Rook(row, col, piece, positionColor);
        } else if(piece.includes("bishop")){
            Bishop(row, col, piece, positionColor);
        } else if(piece.includes("queen")){
            Queen(row, col, piece, positionColor);
        } else if(piece.includes("king")){
            King(row, col, piece, positionColor);
        }
}