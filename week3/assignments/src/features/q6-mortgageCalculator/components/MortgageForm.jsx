import { useState } from "react";
import "./Mortgage.css";
import { validateMortgageInput } from "../utils/validateMortgageInput";
import { useEffect } from "react";
import { calculateMortgage } from "../utils/calculateMortgage";
import MortgageResult from "./MortgageResult";

const MortgageForm = () => {
  const [formData, setFormData] = useState({
    loanAmount: "",
    interestRate: "",
    loanTerm: "",
  });
  const [validationResult, setValidationResult] = useState({
    error: "",
    isValid: false,
  });
  const [result, setResult] = useState({});
  const changeHandler = (e) => {
    setFormData((formData) => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { error, isValid } = validateMortgageInput(formData);
    setValidationResult((validationResult) => {
      //   return {
      //     ...validationResult,
      //     ["error"]: error,
      //     ["isValid"]: isValid,
      //   };
      return {
        error,
        isValid,
      };
    });
  };

  useEffect(() => {
    console.log("isValid", validationResult?.isValid);
    if (validationResult?.isValid) {
      setResult((result) => calculateMortgage(formData));
    }
  }, [validationResult?.isValid, formData]);
  return (
    <>
      <form className="mortgage-form" onSubmit={(e) => submitHandler(e)}>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount ($)</label>
          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            value={formData?.loanAmount}
            placeholder="Enter loan amount"
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Annual Interest Rate (%)</label>
          <input
            type="text"
            id="interestRate"
            name="interestRate"
            value={formData?.interestRate}
            onChange={(e) => changeHandler(e)}
            placeholder="Enter interest rate"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (Years)</label>
          <input
            type="text"
            id="loanTerm"
            name="loanTerm"
            value={formData?.loanTerm}
            placeholder="Enter loan term"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          {validationResult?.error && (
            <h4 className="error-text">{validationResult?.error}</h4>
          )}
        </div>
        <button type="submit" className="calculate-btn">
          Calculate
        </button>
      </form>
      {validationResult?.isValid ? <MortgageResult result={result} /> : null}
    </>
  );
};

export default MortgageForm;
