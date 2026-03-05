import React from "react";
import "./FormRenderer.css";
const FormField = ({ formField }) => {
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
        />{" "}
      </div>
    </>
  );
};

export default FormField;
