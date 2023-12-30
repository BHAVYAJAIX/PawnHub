import "./chessboard.css";
export default function Chessbox({piece, color}){
    return(
        <>
            <div className={`${color}`}>
            {piece && <img src={piece} alt="chess piece" />}
            </div>
        </>
    )
}