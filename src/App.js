//en este vamos a usar render condicional
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./app/actions/AppActions";

const App = () => {
  const counter = useSelector((store) => store.app.count);
  const dispatch = useDispatch();

  const resta = () => {
    return (
      <button onClick={() => dispatch(actions.decreaseByOne())}>minus</button>
    );
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => dispatch(actions.increaseByOne())}>plus</button>
      {counter > 2 ? resta() : <button>waiting</button>}
      <button onClick={() => dispatch(actions.setToZero())}>zero</button>
    </div>
  );
};

export default App;