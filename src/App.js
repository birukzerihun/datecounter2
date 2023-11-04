import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  // const [cal, setCal] = useState(0);
  function addCount() {
    setCount((c) => c + Number(step));
  }
  function subCount() {
    setCount((c) => c - step);
  }
  function addStep() {
    setStep((s) => s + 1);
  }
  function subStep() {
    setStep((s) => s - 1);
  }
  function handleReset() {
    setCount(0);
    setStep(0);
  }
  const date = new Date(" june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        {/* <button onClick={addStep}>+</button>
        Step: {step}{" "} */}
        <input
          type="range"
          min="1"
          max="10"
          value={Number(step)}
          onChange={(e) => setStep(e.target.value)}
        />
        {/* <button onClick={subStep}>-</button> */}
        {step}
      </div>
      <div>
        <button onClick={addCount}>+</button>
        {/* Counter: {count}{" "} */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={subCount}>-</button>
      </div>
      <span>
        {Math.abs(count) === 0
          ? "today is "
          : count > 0
          ? `${Math.abs(count)} days from now is `
          : `${Math.abs(count)} days ago is `}
      </span>

      <span>{date.toDateString()}</span>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
