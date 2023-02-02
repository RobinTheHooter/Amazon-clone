const errors = {};
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const loginValidate = (values, inputs) => {
  if (!emailRegex.test(values.email)) {
    errors.email = inputs[0].errorMessage;
  }

  if (!values.password) {
    errors.password = inputs[1].errorMessage;
  }

  return errors;
};

const registerValidate = (values, inputs) => {
  if (!values.name) {
    errors.name = inputs[0].errorMessage;
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = inputs[1].errorMessage;
  }

  if (!emailRegex.test(values.email)) {
    errors.email = inputs[2].errorMessage;
  }

  if (!values.password) {
    errors.password = inputs[3].errorMessage;
  }

  return errors;
};

export { loginValidate, registerValidate };
