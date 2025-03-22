import React, { ChangeEvent } from "react";

interface GameProps {
  nums: number[];
  op: string;
  answer: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Game: React.FC<GameProps> = ({ nums, op, answer, onChange }) => {
  return (
    <div className="game-container">
      <span className="game">{`${nums[0]} ${op} ${nums[1]}`}</span>
      <input
        aria-label="answer"
        type="number"
        value={answer}
        onChange={onChange}
        autoFocus
      />
    </div>
  );
};

export default Game;
