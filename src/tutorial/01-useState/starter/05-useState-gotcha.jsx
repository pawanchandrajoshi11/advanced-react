import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   // console.log(newState);
    //   return newState;

    setTimeout(() => {
      setValue((prev) => {
        return prev + 1;
      })
    }, 3000)
    ;
  };
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={ handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
