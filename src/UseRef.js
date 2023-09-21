import React, { useRef } from "react";

const RefCmp = () => {
  const focusRef = useRef();

  const focusHandler = () => {
    focusRef.current.focus();
  };
  return (
    <div>
      <input ref={focusRef} />
      <button onClick={focusHandler}>click</button>
    </div>
  );
};
export default RefCmp;
