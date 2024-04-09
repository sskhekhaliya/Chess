import Rook from "./Rook";
import Bishop from "./Bishop";

export default function Queen(row, col, piece, positionColor){
    Rook(row, col, piece, positionColor);
    Bishop(row, col, piece, positionColor);
}