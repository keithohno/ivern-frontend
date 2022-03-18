import { useState } from "react";
import type { ChangeEvent } from "react";

import styles from "../styles/SignupPage.module.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    fetch(`http://192.168.163.128:5000/user/new`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, phone, password }),
    });
  };

  return (
    <div className={styles["signup-form"]}>
      <input value={name} onChange={onNameChange}></input>
      <input value={phone} onChange={onPhoneChange}></input>
      <input value={password} onChange={onPasswordChange}></input>
      <button onClick={onSubmit}>SUBMIT</button>
    </div>
  );
};

export default SignupPage;
