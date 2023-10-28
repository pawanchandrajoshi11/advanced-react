import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return <div>
    <h2>You Clicked {count} Times.</h2>
    <button className="btn" type="button" onClick={handleClick}>Click Me</button>
  </div>;
};

export default UseStateBasics;
