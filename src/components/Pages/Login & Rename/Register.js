import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./Login components/FormInput";
import caution from "../../images/caution.png";
import { registerInputs } from "./Login components/LoginInputs";
import { registerValidate } from "./Login components/Validate";
import "./Login.css";

function RegisterUser() {
  const [formValues, setFormValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(registerValidate(formValues, registerInputs));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // });

  return (
    <div className="register">
      <Link to="/">
        <img
          className="login-logo"
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          alt=""
        />
      </Link>

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="error-message" id="error">
          <img src={caution} alt="" className="caution-sign" />
          <div>
            <p className="text-1">Error</p>
            <p className="text-2">There was a problem processing your</p>
            <p className="text-2">request, Please try again later.</p>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="login-container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          {registerInputs.map((input) => {
            return (
              <>
                <FormInput
                  key={input.id}
                  {...input}
                  value={formValues[input.name]}
                  onChange={handleChange}
                />
              </>
            );
          })}

          <button className="login-sign-in-button">Continue</button>
        </form>
        <p>
          <span></span>
          Password must be atleast 6 characters long.
        </p>

        <p style={{ marginBottom: "10px" }}>
          We will send you a text to verify your phone. Message and Data rates
          may apply.
        </p>
        <hr />
        <p>
          Already have an account?
          <span>
            <Link to="/login" className="link-products">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterUser;
