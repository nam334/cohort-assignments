import "./StepOne.css";

const StepOne = ({ state, dispatch }) => {
  return (
    <div className="step-one-wrapper">
      <div className="step-one-container">
        <h2 className="form-heading">Personal Information</h2>

        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={state.formData.firstName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: {
                  field: "firstName",
                  value: e.target.value,
                },
              })
            }
          />
          {state.errors.firstName && (
            <p className="error-text">{state.errors.firstName}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={state.formData.lastName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: {
                  field: "lastName",
                  value: e.target.value,
                },
              })
            }
          />
          {state.errors.lastName && (
            <p className="error-text">{state.errors.lastName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepOne;
