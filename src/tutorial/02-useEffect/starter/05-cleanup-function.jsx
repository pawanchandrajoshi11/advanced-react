import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Button
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const intId = setInterval(() => {   /*setInterval always returns an ID which can then be used to clear it out using clearInterval(), 
                                        Clearing out is important as it'll run continuously no matter the toggle is on or off, and eventually 
                                        slows down the application*/
    console.log("this is inside interval!!");
    }, 1000)
    return () => {
      clearInterval(intId);
    }
  }, []);
  return <h4>Hey there!</h4>;
};

export default CleanupFunction;
