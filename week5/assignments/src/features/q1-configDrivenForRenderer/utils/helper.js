export const isValid = (validation, input) => {
  const { required, minLength, pattern } = validation;
  if (required && !input) return "Empty inputs are not allowed";
  if (minLength && minLength > input.length) {
    return `Length should be greater than ${minLength}`;
  }
  if (pattern && input) {
    const regex = new RegExp(pattern);

    if (!regex.test(input)) {
      return "Invalid format";
    }
  }

  return "";
};
