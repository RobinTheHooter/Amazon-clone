import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./Login components/FormInput";
import caution from "../../images/caution.png";
import { loginInputs } from "./Login components/LoginInputs";
import { loginValidate } from "./Login components/Validate";
import "./Login.css";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(loginValidate(formValues, loginInputs));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="login">
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
            <p className="text-1">There was a problem</p>
            <p className="text-2">Please try again later.</p>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="login-container">
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
          {loginInputs.map((input) => {
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
          By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and out Interset-Based Ads
          Notice.
        </p>
        <div>
          <center>New to amazon?</center>
        </div>
        <Link to="/register" className="login-register-link">
          <div>Create your Amazon Account</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
