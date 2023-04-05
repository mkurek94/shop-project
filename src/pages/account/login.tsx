import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Register.module.css";

type LoginForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const onSave = (values: LoginForm) => {
  console.log(values);
};

const Login = () => {
  const { handleSubmit, register } = useForm<LoginForm>();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Sign in!</h1>
        <input placeholder="E-mail" type="email" {...register("email")} />
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <button onClick={handleSubmit(onSave)}>Sign in</button>
        <p>
          Don't have an account? <Link href="/account/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
