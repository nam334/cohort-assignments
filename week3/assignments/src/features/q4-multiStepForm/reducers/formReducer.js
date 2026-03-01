export const formReducer = (currentState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD": {
      return {
        ...currentState,
        formData: {
          ...currentState.formData,
          [action.payload.field]: action.payload.value,
        },
      };
    }
    case "PREVIOUS_STEP": {
      return {
        ...currentState,
        currentStep:
          currentState.currentStep > 1
            ? currentState.currentStep - 1
            : currentState.currentStep,
      };
    }
    case "NEXT_STEP": {
      let errors = {};
      if (currentState.currentStep === 1) {
        if (
          !currentState.formData.firstName ||
          currentState.formData.firstName.length < 2
        )
          errors.firstName = "Firstname should at least be 2 characters";
        if (
          !currentState.formData.lastName ||
          currentState.formData.lastName.length < 2
        )
          errors.lastName = " Lastname should at least be two characters";
        if (Object.keys(errors)?.length > 0) {
          //errors found
          return {
            ...currentState,
            errors,
          };
        } else {
          //no errors
          return {
            ...currentState,
            currentStep: currentState.currentStep + 1,
            errors: {},
          };
        }
      }
      if (currentState.currentStep === 2) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!currentState.formData.email)
          errors.email = "Email should not be empty";
        else if (!emailRegex.test(currentState.formData.email))
          errors.email = "Email is not valid";

        if (!currentState.formData.phone)
          errors.phone = "Phone number should not be empty";
        else if (currentState.formData.phone.length !== 10)
          errors.phone = "Phone number should be of 10 digits";

        if (Object.keys(errors).length > 0) {
          //errors found
          return {
            ...currentState,
            errors,
          };
        } else {
          //no errors
          return {
            ...currentState,
            currentStep: currentState.currentStep + 1,
            errors: {},
          };
        }
      }

      if (currentState.currentStep === 3) {
        if (!currentState.formData.password)
          errors.password = "Passwords should not be empty";
        else if (currentState.formData.password.length < 6)
          errors.password = " Password should be minimum 6 charactes";

        if (!currentState.formData.confirmPassword)
          errors.confirmPassword = "Confirm password should not be empty";
        else if (
          currentState.formData.confirmPassword !==
          currentState.formData.password
        )
          errors.confirmPassword = "Passwords do not match";

        if (Object.keys(errors)?.length > 0)
          return {
            ...currentState,
            errors,
          };
        else {
          return {
            ...currentState,
            currentStep: currentState.currentStep,
            errors: {},
          };
        }
      }
      return currentState;
    }

    case "Submit": {
      let errors = {};
      if (currentState.currentStep === 3) {
        if (!currentState.formData.password)
          errors.password = "Passwords should not be empty";
        else if (currentState.formData.password.length < 6)
          errors.password = " Password should be minimum 6 charactes";

        if (!currentState.formData.confirmPassword)
          errors.confirmPassword = "Confirm password should not be empty";
        else if (
          currentState.formData.confirmPassword !==
          currentState.formData.password
        )
          errors.confirmPassword = "Passwords do not match";

        if (Object.keys(errors)?.length > 0)
          return {
            ...currentState,
            errors,
          };
        else {
          return {
            ...currentState,
            isSubmitted: true,
            errors: {},
          };
        }
      }
      return currentState;
    }
    default:
      return currentState;
  }
};
