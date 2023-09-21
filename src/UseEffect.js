import React, { useEffect, useState } from "react";
import "./styles.css";

export default function UseEffect() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, [1000]);
    console.log(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}
