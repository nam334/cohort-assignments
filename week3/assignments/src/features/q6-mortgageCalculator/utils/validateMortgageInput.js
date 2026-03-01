//  loanAmount: "",
//     interestRate: "",
//     loanTerm: "",
export const validateMortgageInput = (formData) => {
  if (
    formData.loanAmount === "" ||
    formData.interestRate === "" ||
    formData.loanTerm === ""
  ) {
    return {
      error: "Inputs are empty",
      isValid: false,
    };
  } else {
    const loan = Number(formData.loanAmount);
    const interest = Number(formData.interestRate);
    const term = Number(formData.loanTerm);
    if (isNaN(loan) || isNaN(interest) || isNaN(term)) {
      return {
        isValid: false,
        error: "Inputs are not numbers",
      };
    } else if (interest === 0) {
      return {
        error: "Interest rate canot be zero",
        isValid: false,
      };
    } else if (loan < 0 || interest < 0 || term < 0) {
      return {
        error: "Negative inputs are not allowed",
        isValid: false,
      };
    } else {
      return {
        isValid: true,
        error: "",
      };
    }
  }
};
