import { useState, useEffect } from "react";
import { userEmailRegex, userNameRegex } from "../../constants";
import Button from "../Button";

import styles from "./form.module.css";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const buttonStyles = {
    background: disabled ? "rgb(236, 237, 230)" : "#ff534a",
    color: disabled ? "#000" : "#fff",
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    console.group("User_Details");
    console.log("Name: ", userName);
    console.log("Email", userEmail);
    console.groupEnd("User_Details");
  }

  function handleUserEmailUpdate(event) {
    const email = event.target.value;
    setUserEmail(email);
  }

  function handleUserNameUpdate(event) {
    const name = event.target.value;
    setUserName(name);
  }

  useEffect(() => {
    const isValidName = userNameRegex.test(userName);
    const isValidEmail = userEmailRegex.test(userEmail);
    if (!isValidName || !isValidEmail) {
      setDisabled(true);
      if (userEmail && !isValidEmail) {
        setUserEmailError("Please Enter a Valid Email");
      } else {
        setUserEmailError("");
      }
      if (userName && !isValidName) {
        setUserNameError("Please Enter a Valid Name");
      } else {
        setUserNameError("");
      }
    } else {
      setDisabled(false);
      setUserEmailError("");
      setUserNameError("");
    }
  }, [userName, userEmail]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Feedback Form</h1>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            value={userName}
            onChange={handleUserNameUpdate}
            className={styles.input}
            placeholder=" "
          />
          <label htmlFor="userName" className={styles.label}>
            Name
          </label>
          <div className={styles.error}>{userNameError}</div>
        </div>
        <div className={styles.inputContainer}>
          <input
            value={userEmail}
            onChange={handleUserEmailUpdate}
            className={styles.input}
            placeholder=" "
          />
          <label htmlFor="userEmail" className={styles.label}>
            Email
          </label>
          <div className={styles.error}>{userEmailError}</div>
        </div>
        <Button
          buttonText={"Submit"}
          disabled={disabled}
          style={buttonStyles}
        />
      </form>
    </div>
  );
}
