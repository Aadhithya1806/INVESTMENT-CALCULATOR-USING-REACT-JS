import React from "react";
import { useState } from "react";
const Input = ({ type, label, onChange, value }) => {
  // const [currValue, setCurrValue] = useState("");
  //   const onChangeHandler = (event) => {
  //     setCurrValue(event.target.value);
  //     console.log(event.target.value);
  //   };
  return (
    <p>
      <label>{label}</label>
      <input min="1" type={type} value={value} onChange={onChange} required />
    </p>
  );
};

export default Input;
