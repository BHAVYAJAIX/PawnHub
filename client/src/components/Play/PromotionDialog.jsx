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
export default function PromotionDialog({position, onPromote}) {
    const piecesw = ['qw', 'rw', 'bw', 'nw'];
    const piecesb = ['qb', 'rb', 'bb', 'nb'];
    const pieceImages = {
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
    return (
        <div>
            {position[0]===0? piecesw.map((piece, i) => (
                <button key={i} onClick={() => onPromote(piece)}>
                    <img src={pieceImages[piece]}/>
                </button>
            )):
            piecesb.map((piece, i) => (
                <button key={i} onClick={() => onPromote(piece)}>
                    <img src={pieceImages[piece]}/>
                </button>
            ))
}
        </div>
    );
}