import Input from "../UI/Input";
import React from "react";
const UserInput = ({ onChangeHandler, currValue }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          type="number"
          label="Initial Investment"
          onChange={(event) => {
            onChangeHandler("initialInvestment", event.target.value);
          }}
          value={currValue.initialInvestment}
        ></Input>
        <Input
          type="number"
          label="Annual Investment"
          onChange={(event) => {
            onChangeHandler("annualInvestment", event.target.value);
          }}
          value={currValue.annualInvestment}
        ></Input>
      </div>
      <div className="input-group">
        <Input
          type="number"
          label="Expected Return(%)"
          onChange={(event) => {
            onChangeHandler("expectedReturn", event.target.value);
          }}
          value={currValue.expectedReturn}
        ></Input>
        <Input
          type="number"
          label="Duration(Years)"
          onChange={(event) => {
            onChangeHandler("duration", event.target.value);
          }}
          value={currValue.duration}
        ></Input>
      </div>
    </section>
  );
};

export default UserInput;
