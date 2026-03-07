import React from "react";
import "./FormRenderer.css";
const FormField = ({ formField, changeHandler, errors }) => {
  console.log("errors obj are", errors);
  const { type, label, name, placeholder, defaultValue } = formField;
  const { required, minLength } = formField.validation;
  return (
    <>
      <div className="form-field">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          minLength={minLength}
          onChange={(e) => changeHandler(e)}
        />{" "}
        {errors[name]}
      </div>
    </>
  );
};

export default FormField;
