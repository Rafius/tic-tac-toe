import "./App.css";
import useBoardHooks from "./useBoardHooks";

const Board = () => {
  const { boardState, handleClick, winner, resetBoard } = useBoardHooks(9);

  return (
    <div className="grid">
      {boardState.map((item, index) => (
        <div className="item" onClick={() => handleClick(index)}>
          {item}
        </div>
      ))}
      {winner && <h1>Winner is {winner}</h1>}
      <button type="button" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
};

export default Board;
