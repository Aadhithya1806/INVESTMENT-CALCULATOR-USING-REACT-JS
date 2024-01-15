import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
const Results = ({ userInput }) => {
  const derivedResults = calculateInvestmentResults(userInput);
  const initialInvestment =
    derivedResults[0].valueEndOfYear -
    derivedResults[0].interest -
    derivedResults[0].annualInvestment;
  console.log(derivedResults);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {derivedResults.map((results) => {
          const totalInterest =
            results.valueEndOfYear -
            results.annualInvestment * results.year -
            initialInvestment;
          const totalInvestedAmount = results.valueEndOfYear - totalInterest;
          return (
            <tr key={results.year}>
              <td>{results.year}</td>
              <td>{formatter.format(results.valueEndOfYear)}</td>
              <td>{formatter.format(results.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
