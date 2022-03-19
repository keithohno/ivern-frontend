import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";

import styles from "../styles/LoginPage.module.css";

const LoginPage = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    const res = await fetch(`http://192.168.163.128:5000/login`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ phone, password }),
    });
    if (res.ok) router.push("/");
  };

  return (
    <div className={styles["login-form"]}>
      <input value={phone} onChange={onPhoneChange}></input>
      <input value={password} onChange={onPasswordChange}></input>
      <button onClick={onSubmit}>SUBMIT</button>
    </div>
  );
};

export default LoginPage;
