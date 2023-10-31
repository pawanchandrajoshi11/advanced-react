import { useState } from "react";

const ToggleChallenge = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  }
  return <div>
    <h1>Toggle is {isToggle ? "on" : "off"}.</h1>
    <button className="btn" onClick={handleToggle}>Switch Toggle</button>
  </div>;
};

export default ToggleChallenge;
