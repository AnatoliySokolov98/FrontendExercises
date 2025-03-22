import React from "react";

interface ScoreScreenProps {
  score: number;
  onTryAgain: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, onTryAgain }) => {
  return (
    <div className="score">
      {`Score: ${score}`}
      <button onClick={onTryAgain}>Try Again</button>
    </div>
  );
};

export default ScoreScreen;
