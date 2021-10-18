import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./app/actions/ConterActions";

const Form = ({ datos }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const charge = (e) => {
    e.preventDefault(); //sin este recarga y blanquea
    let data = {
      name: name,
      age: age
    };
    dispatch(actions.datos(data));
  };

  return (
    <form onSubmit={charge}>
      <label for="fname">Name:</label>
      <br></br>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <br></br>
      <label for="lage">Age:</label>
      <br></br>
      <input
        type="text"
        onChange={(event) => setAge(event.target.value)}
      ></input>
      <br></br>
      <input type="submit"></input>
    </form>
  );
};

export default Form;
