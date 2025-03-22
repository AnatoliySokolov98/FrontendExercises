import React, { useState, ChangeEvent } from "react";
import "./App.css";
import { useTimer } from "./hooks/useTimer";
import ScoreScreen from "./components/ScoreScreen";
import Game from "./components/Game";

const App: React.FC = () => {
  const { time, resetTimer } = useTimer(120);
  const [nums, setNums] = useState([
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
  ]);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [op, setOp] = useState(Math.random() < 0.5 ? "+" : "-");

  const checkForCorrectness = (e: ChangeEvent<HTMLInputElement>) => {
    const intAnswer = parseInt(e.target.value, 10);
    const correctAnswer = op === "+" ? nums[0] + nums[1] : nums[0] - nums[1];

    if (intAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
      setAnswer("");
      setNums([
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
      ]);
      setOp(Math.random() < 0.5 ? "+" : "-");
    } else {
      setAnswer(e.target.value);
    }
  };

  const handleTryAgain = () => {
    resetTimer();
    setScore(0);
    setAnswer("");
  };

  return (
    <div>
      <div className="header">
        <span>{`Seconds left: ${time}`}</span>
        <span>{`Score: ${score}`}</span>
      </div>
      {time === 0 ? (
        <ScoreScreen score={score} onTryAgain={handleTryAgain} />
      ) : (
        <Game
          nums={nums}
          op={op}
          answer={answer}
          onChange={checkForCorrectness}
        />
      )}
    </div>
  );
};

export default App;
