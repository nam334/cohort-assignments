import "./StepOne.css";

const StepTwo = ({ state, dispatch }) => {
  return (
    <div className="step-one-wrapper">
      <div className="step-one-container">
        <h2 className="form-heading">Contact Information</h2>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={state.formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: {
                  field: "email",
                  value: e.target.value,
                },
              })
            }
          />
          {state.errors.email && (
            <p className="error-text">{state.errors.email}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            value={state.formData.phone}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: {
                  field: "phone",
                  value: e.target.value,
                },
              })
            }
          />
          {state.errors.phone && (
            <p className="error-text">{state.errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
