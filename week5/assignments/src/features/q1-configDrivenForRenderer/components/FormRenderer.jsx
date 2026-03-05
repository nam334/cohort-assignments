import "./FormRenderer.css";
import { formData } from "../utils/data";
import FormField from "./FormField";
import { useState } from "react";

const FormRenderer = () => {

    const [formData, setFormData] = useState({})
    const changeHandler = e => {
       setFormData(formData => {
        ...formData,
        e.target.name: e.target.value
       })
    }
  return (
    <>
      <div className="form-container">
        <h1>{formData?.title}</h1>

        {formData?.fields?.map((formField, index) => (
          <FormField key={index} formField={formField} />
        ))}

        <button className="submit-btn" type="submit">
          {formData?.submitLabel}
        </button>
      </div>
    </>
  );
};

export default FormRenderer;
