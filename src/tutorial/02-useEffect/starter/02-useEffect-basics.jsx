import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  //useEffect
  useEffect(() => {
    console.log("from useefffect");
  }, []);       /*if we will provide an empty dependency array, 
  it will render only once during the initial render otherwise
  it will render everytime (it's his default behaviour)*/

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
