import "./chessboard.css";

export default function Chessbox({piece, color, position, handleMove}){
    const dragStart = (e) => {
        const data = {
            piece,
            fromPosition: position
        };
        e.dataTransfer.setData('application/json', JSON.stringify(data));
    }

    const drop = (e) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('application/json'));
        handleMove(data.fromPosition, position);
    }
    return(
        <>
            <div 
                id={piece} 
                className={`${color}`} 
                draggable 
                onDragStart={dragStart} 
                onDragOver={(e) => e.preventDefault()} 
                onDrop={drop}
            >
                {piece && <img src={piece} alt="chess piece" />}
            </div>
        </>
    )
}