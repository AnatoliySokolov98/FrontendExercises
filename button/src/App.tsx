import { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="wrapper">
      <h1>{`The count is: ${count}`}</h1>
      <div className="buttonContainer">
        <button className="button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
