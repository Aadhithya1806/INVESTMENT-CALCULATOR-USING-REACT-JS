import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [currValue, setcurrValue] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isValid = currValue.duration >= 1;
  const onChangeHandler = (inputField, newValue) => {
    setcurrValue((preValues) => {
      console.log({
        ...preValues,
        [inputField]: +newValue,
      });
      return {
        ...preValues,
        [inputField]: +newValue,
      };
    });
  };

  return (
    <>
      <Header></Header>
      <UserInput
        currValue={currValue}
        onChangeHandler={onChangeHandler}
      ></UserInput>
      {!isValid && <p className="center"> Enter a valid duration.</p>}
      {isValid && <Results userInput={currValue}></Results>}
    </>
  );
}

export default App;
