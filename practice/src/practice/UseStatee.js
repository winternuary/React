import { useState } from "react";

const State = () => {
  const [message, setMessage] = useState("헉...");
  const love = () => setMessage("사랑해용");
  const getOut = () => setMessage("사라졍");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={love}>❤❤</button>
      <button onClick={getOut}>(°ㅂ° ╬)</button>
    </div>
  );
};

export default State;
