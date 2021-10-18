//en este vamos a usar render condicional
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  const resta = () => {
    return <button onClick={decreaseByOne}>minus</button>;
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      {counter > 2 ? resta() : <button>waiting</button>}
      <button onClick={setToZero}>zero</button>
    </div>
  );
};

export default App;
