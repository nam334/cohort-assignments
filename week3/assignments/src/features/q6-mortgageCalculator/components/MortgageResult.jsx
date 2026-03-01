import React from "react";

const MortgageResult = ({ result }) => {
  const { monthlyPayment, totalPaymentAmount, totalInterest } = result;
  return (
    <>
      <div className="result-container">
        <div>Monthly Payment = {monthlyPayment}</div>
        <div> Total Payment Amount = {totalPaymentAmount}</div>
        Total Interest = {totalInterest}
      </div>
    </>
  );
};

export default MortgageResult;
