import "./StepOne.css";

const StepThree = ({ state, dispatch }) => {
  return (
    <div className="step-one-wrapper">
      <div className="step-one-container">
        <h2 className="form-heading">Account Security</h2>

        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={state.formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: {
                  field: "password",
                  value: e.target.value,
                },
              })
            }
          />
          {state.errors.password && (
            <p className="error-text">{state.errors.password}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={state.formData.confirmPassword}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: {
                  field: "confirmPassword",
                  value: e.target.value,
                },
              })
            }
          />
          {state.errors.confirmPassword && (
            <p className="error-text">{state.errors.confirmPassword}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
