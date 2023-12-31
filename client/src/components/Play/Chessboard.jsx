import Chessbox from "./Chessbox";
import "./chessboard.css";
import { useState } from "react";
import PromotionDialog from "./PromotionDialog";
import pawnb from "./assets/pawnb.png"
import pawnw from "./assets/pawnw.png"
import rookw from "./assets/rookw.png"
import rookb from "./assets/rookb.png"
import queenb from "./assets/queenb.png"
import queenw from "./assets/queenw.png"
import kingw from "./assets/kingw.png"
import kingb from "./assets/kingb.png"
import knightb from "./assets/knightb.png"
import knightw from "./assets/knightw.png"
import bishopw from "./assets/bishopw.png"
import bishopb from "./assets/bishopb.png"
export default function Chessboard() {
    const [board, setBoard] = useState([
        ["rb", "nb", "bb", "qb", "kb", "bb", "nb", "rb"],
        ["pb", "pb", "pb", "pb", "pb", "pb", "pb", "pb"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["pw", "pw", "pw", "pw", "pw", "pw", "pw", "pw"],
        ["rw", "nw", "bw", "qw", "kw", "bw", "nw", "rw"]
    ]);
    const [promotion, setPromotion] = useState(null);
    const pieceImages = {
        'pb': pawnb,
        'pw': pawnw,
        'rb': rookb,
        'rw': rookw,
        'qb': queenb,
        'qw': queenw,
        'kb': kingb,
        'kw': kingw,
        'nb': knightb,
        'nw': knightw,
        'bb': bishopb,
        'bw': bishopw,
    };
    const handleMove = (fromPosition, toPosition) => {
        setBoard(prevBoard => {
            const newBoard = [...prevBoard];
            const [fromRow, fromCol] = fromPosition;
            const [toRow, toCol] = toPosition;
            const piece = newBoard[fromRow][fromCol];
            newBoard[fromRow][fromCol] = "";
            newBoard[toRow][toCol] = piece;
            if (piece === 'pw' && toRow === 0) {
                setPromotion({position: toPosition});
            } else if (piece === 'pb' && toRow === 7) {
                setPromotion({position: toPosition});
            }
            return newBoard;
        });
    };
    const handlePromotion = (piece) => {
        setBoard(prevBoard => {
            const newBoard = [...prevBoard];
            const [row, col] = promotion.position;
            newBoard[row][col] = piece;
            return newBoard;
        });
        setPromotion(null);
    };
    return (
        <div className="cont">
            <div className="chessboard">
                {board.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((item, j) => {
                            const pieceImage = pieceImages[item];
                            const isDark = (i + j) % 2 === 0;
                            return (
                                <Chessbox key={j} piece={pieceImage} color={isDark ? "light" : "dark"} position={[i, j]} handleMove={handleMove}/>
                            );
                        })}
                    </div>
                ))}
            </div>
            {promotion && (
                <PromotionDialog 
                    position={promotion.position} 
                    onPromote={handlePromotion} 
                />
            )}
        </div>
    );
}