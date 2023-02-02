import React, { useState } from "react";
import "./FormInput.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <h5 style={{ marginBottom: "5px" }}>{props.label}</h5>
      <input
        key={id}
        {...inputProps}
        onChange={onChange}
        className="form-input"
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="error-msg">{errorMessage}</span>
      <br />
    </div>
  );
}

export default FormInput;
