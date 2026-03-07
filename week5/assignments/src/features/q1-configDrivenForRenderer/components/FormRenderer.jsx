import "./FormRenderer.css";
import { formData } from "../utils/data";
import FormField from "./FormField";
import { useState } from "react";
import { isValid } from "../utils/helper";

const FormRenderer = () => {
  const [formValues, setFormValues] = useState({});
  //error state to hold errors
  const [errors, setErrors] = useState({});
  const changeHandler = (e) => {
    if (e.target.type === "checkbox") {
      setFormValues((formValues) => {
        return {
          ...formValues,
          [e.target.name]: e.target.checked,
        };
      });
    } else
      setFormValues((formValues) => {
        return {
          ...formValues,

          [e.target.name]: e.target.value,
        };
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let totalErrors = {};
    console.log("form data", formValues);
    for (let i = 0; i < formData.fields.length; i++) {
      totalErrors[formData.fields[i].name] = isValid(
        formData.fields[i].validation,
        formValues[formData.fields[i].name],
      );
    }

    setErrors(totalErrors);
  };
  return (
    <>
      <div className="form-container">
        <form>
          <h1>{formData?.title}</h1>

          {formData.fields?.map((formField, index) => (
            <FormField
              key={index}
              formField={formField}
              changeHandler={changeHandler}
              errors={errors}
            />
          ))}

          <button className="submit-btn" onClick={(e) => submitHandler(e)}>
            {formData?.submitLabel}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormRenderer;
