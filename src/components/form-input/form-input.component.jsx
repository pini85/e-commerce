import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label className={`${value.length ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
