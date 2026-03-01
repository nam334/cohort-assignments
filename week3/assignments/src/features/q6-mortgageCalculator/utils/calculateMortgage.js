export const calculateMortgage = (formData) => {
  const { loanAmount, interestRate, loanTerm } = formData;
  //M = P(i(1+i)n)/((1+i)n - 1)
  const i = Number(loanAmount);
  const r = Number(interestRate / 100);
  const t = Number(loanTerm);
  let monthlyPayment = ((i * (r * (1 + r) * t)) / ((1 + r) * t - 1)).toFixed(2);

  let totalPaymentAmount = (i * t).toFixed(2);
  let totalInterest = (totalPaymentAmount - i).toFixed(2);

  return { monthlyPayment, totalPaymentAmount, totalInterest };
};
