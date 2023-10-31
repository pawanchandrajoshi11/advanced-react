import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [val1, setVal1] = useState("");
  //truthy
  const [val2, setVal2] = useState("Hello");
  return (
    <div>
      <h2>Falsy OR: {val1 || "HEY FALSY"}</h2>
      <h2>Falsy AND: {val1 && "HEY FALSY"}</h2>
      <h2>Truthy OR: {val2 || "YOKOHAMA"}</h2>
      <h2>Truthy AND: {val2 && "YOKOHAMA"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
