import React, { useState } from "react";
import "./styles.css";
import UseEffect from "./UseEffect";
import RefCmp from "./UseRef";
export default function App() {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="App">
      <h1>useState</h1>
      <h1>{count}</h1>
      <button onClick={countHandler}>click</button>
      <h1>useEffect</h1>
      <UseEffect />
      <h1>useRef to focus input box</h1>
      <RefCmp />
    </div>
  );
}
