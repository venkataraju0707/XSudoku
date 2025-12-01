import { useState } from "react";

export default function App() {
  // 9x9 empty board
  const emptyBoard = Array(9).fill().map(() => Array(9).fill(""));
  const [board, setBoard] = useState(emptyBoard);

  const handleChange = (row, col, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const newBoard = board.map(r => [...r]);
      newBoard[row][col] = value;
      setBoard(newBoard);
    }
  };

  const clearBoard = () => {
    setBoard(emptyBoard);
  };

  const validateBoard = () => {
    alert("Validation logic can be added later!");
  };

  return (
    <div className="container">
      {/* Inline CSS */}
      <style>{`
        .container {
          width: 420px;
          margin: 40px auto;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        h1 {
          margin-bottom: 5px;
        }

        p {
          margin-bottom: 20px;
          color: #444;
        }

        .board {
          display: grid;
          grid-template-columns: repeat(9, 40px);
          gap: 2px;
          margin: 20px auto;
        }

        .cell {
          width: 40px;
          height: 40px;
          font-size: 20px;
          text-align: center;
          border: 1px solid #333;
        }

        button {
          padding: 10px 16px;
          margin: 5px;
          cursor: pointer;
          border: none;
          background: #333;
          color: white;
          border-radius: 5px;
        }

        button:hover {
          opacity: 0.85;
        }
      `}</style>

      {/* Title */}
      <h1>Sudoku Validator</h1>

      {/* Description */}
      <p>Enter numbers 1-9 and validate the board.</p>

      {/* Sudoku Board */}
      <div className="board">
        {board.map((row, rIndex) =>
          row.map((val, cIndex) => (
            <input
              key={`${rIndex}-${cIndex}`}
              className="cell"
              maxLength={1}
              value={val}
              onChange={(e) => handleChange(rIndex, cIndex, e.target.value)}
            />
          ))
        )}
      </div>

      {/* Buttons */}
      <button onClick={validateBoard}>Validate</button>
      <button onClick={clearBoard}>Clear</button>
    </div>
  );
}
