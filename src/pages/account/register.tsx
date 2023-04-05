import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/Register.module.css";

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const onSave = (values: RegisterForm) => {
    console.log(values);
}

const Register = () => {
  const { handleSubmit, register } = useForm<RegisterForm>();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Sign up!</h1>
        <input placeholder="Name" type="text" {...register('name')}/>
        <input placeholder="E-mail" type="email" {...register('email')}/>
        <input placeholder="Password" type="password" {...register('password')}/>
        <input placeholder="Confirm password" type="password" {...register('confirmPassword')}/>
        <button onClick={handleSubmit(onSave)}>Sign up</button>
        <p>Already have an account? <Link href="/account/login">Sign in</Link></p>
      </div>
    </div>
  );
};

export default Register;
