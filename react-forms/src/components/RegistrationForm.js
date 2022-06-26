import { useState } from "react";
import "./form.css";

const RegistrationForm = () => {
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPasswordValue] = useState("");
  const [errorEmailMessage, setErrorEmailMessageValue] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessageValue] = useState("");
  const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessageValue] =
    useState("");
  const [errorPasswords, setErrorPasswords] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setEmailValue(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPasswordValue(value);
  };

  const handleConfirmPasswordChange = ({ target: { value } }) => {
    setConfirmPasswordValue(value);
  };

  const handleReset = () => {
    setEmailValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorEmailMessageValue("");
    setErrorPasswordMessageValue("");
    setErrorConfirmPasswordMessageValue("");
    setErrorPasswords("");

    if (email.trim().length === 0) {
      setErrorEmailMessageValue("Please enter Email");
    }
    if (password.trim().length === 0) {
      setErrorPasswordMessageValue("Please enter Password");
    }
    if (confirmPassword.trim().length === 0) {
      setErrorConfirmPasswordMessageValue("Please enter Confirm Password");
    }
    if (confirmPassword !== password) {
      setErrorPasswords("Password and Confirm Password desn't match");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-input">
        <input
          placeholder="Enter Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        {errorEmailMessage && <div className="error">{errorEmailMessage}</div>}
      </div>
      <div className="form-input">
        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {errorPasswordMessage && (
          <div className="error">{errorPasswordMessage}</div>
        )}
      </div>
      <div className="form-input">
        <input
          placeholder="Enter Confirm Password"
          type="password"
          name="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {errorConfirmPasswordMessage && (
          <div className="error">{errorConfirmPasswordMessage}</div>
        )}
        {errorPasswords && <div className="error">{errorPasswords}</div>}
      </div>
      <button className="button" type="submit">
        Submit
      </button>
      <button className="button" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default RegistrationForm;
