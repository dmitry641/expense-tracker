import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const [date, setDate] = useState(() => Date.now()); // ?
  const [date1, setDate1] = useState(Date.now());

  const inc = () => setValue((prev) => prev + 1);
  const dec = () => setValue((prev) => prev - 1);

  useEffect(() => {
    if (value < -10) console.log(value);
  }, [value]);

  const renderCounter = useRef(1);
  useEffect(() => {
    renderCounter.current++;
  });

  // useMemo, useCallback

  // useReducer, useContext, useCustom

  return (
    <div>
      <button onClick={inc}>+</button>
      <h1>Value: {value}</h1>
      <button onClick={dec}>-</button>
      <pre>{date}</pre>
      <pre>{date1}</pre>
      <p>Render count: {renderCounter.current}</p>
    </div>
  );
}

export default App;
