import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import styles from "../../styles/Auth.module.css";
import { AUTH_TRANSLATIONS } from "@/constants/translations";
import { postSignUp } from "@/services/users";

type RegisterForm = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const onSave: SubmitHandler<RegisterForm> = (values) => {
  const { email, userName, password, confirmPassword } = values;
  if (password === confirmPassword) {
    postSignUp({ email, password, userName });
  }
};

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterForm>();
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>{t(AUTH_TRANSLATIONS.auth.register.header)}</h1>
        <input
          placeholder={t(AUTH_TRANSLATIONS.auth.register.form.name) as string}
          type="text"
          // error={
          //   errors?.userName?.type === "required" &&
          //   t(AUTH_TRANSLATIONS.auth.required)
          // }
          {...register("userName", { required: true })}
        />
        <input
          placeholder={t(AUTH_TRANSLATIONS.auth.register.form.email) as string}
          type="email"
          {...register("email", { required: true })}
        />
        <input
          placeholder={
            t(AUTH_TRANSLATIONS.auth.register.form.password) as string
          }
          type="password"
          {...register("password", { required: true })}
        />
        <input
          placeholder={
            t(AUTH_TRANSLATIONS.auth.register.form.confirmPassword) as string
          }
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        <button onClick={handleSubmit(onSave)}>
          {t(AUTH_TRANSLATIONS.auth.register.button)}
        </button>
        <p>
          <Trans i18nKey={AUTH_TRANSLATIONS.auth.register.signInInfo}>
            Already have an account? <Link href="/account/login">Sign in</Link>
          </Trans>
        </p>
      </div>
    </div>
  );
};

export default Register;
