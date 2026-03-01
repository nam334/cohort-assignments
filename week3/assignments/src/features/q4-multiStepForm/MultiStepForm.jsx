import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { useReducer } from "react";
import { formReducer } from "./reducers/formReducer";
import { initialState } from "./reducers/initialState";

let TOTAL_STEPS = 3;
const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nextStepHandler = () => {
    dispatch({
      type: "NEXT_STEP",
    });
  };

  const previousStepHandler = () => {
    dispatch({
      type: "PREVIOUS_STEP",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "Submit",
    });
  };

  return (
    <>
      {state.currentStep === 1 ? (
        <StepOne state={state} dispatch={dispatch} />
      ) : state.currentStep === 2 ? (
        <StepTwo state={state} dispatch={dispatch} />
      ) : state.currentStep === 3 ? (
        <StepThree state={state} dispatch={dispatch} />
      ) : null}
      <div className="navigation-btn-container">
        <button
          disabled={state.currentStep === 1}
          onClick={previousStepHandler}
          className="nav-btn prev-btn"
        >
          Previous
        </button>
        <button
          disabled={state.currentStep === 3}
          onClick={nextStepHandler}
          className="nav-btn next-btn"
        >
          Next
        </button>
        {state.currentStep === 3 && (
          <button
            onClick={(e) => submitHandler(e)}
            className="nav-btn next-btn"
          >
            Submit
          </button>
        )}
      </div>
      {state.isSubmitted && (
        <p className="successMsg">Form Submitted successfully</p>
      )}
    </>
  );
};

export default MultiStepForm;
