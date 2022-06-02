import { useEffect, useState } from "react";

const useBoardHooks = (board) => {
  const [boardState, setBoardState] = useState([...Array(board)]);
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(undefined);

  useEffect(() => {
    const hasWon = () => {
      const board = [...boardState];
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return setWinner(board[a]);
        }
      }
    };
    hasWon();
  }, [boardState]);

  const handleClick = (index) => {
    if (boardState[index] !== undefined || winner) return;

    const newBoardState = [...boardState];
    newBoardState[index] = isX ? "O" : "X";

    setIsX(isX ? false : true);
    setBoardState(newBoardState);
  };

  const resetBoard = () => {
    setBoardState([...Array(board)]);
    setIsX(true);
    setWinner(undefined);
  };

  return {
    winner,
    boardState,
    resetBoard,
    handleClick
  };
};

export default useBoardHooks;
