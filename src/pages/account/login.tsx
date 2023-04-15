import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import styles from "../../styles/Auth.module.css";
import { AUTH_TRANSLATIONS } from "@/constants/translations";

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
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>{t(AUTH_TRANSLATIONS.auth.login.header)}</h1>
        <input
          placeholder={t(AUTH_TRANSLATIONS.auth.login.form.email) as string}
          type="email"
          {...register("email")}
        />
        <input
          placeholder={t(AUTH_TRANSLATIONS.auth.login.form.password) as string}
          type="password"
          {...register("password")}
        />
        <button onClick={handleSubmit(onSave)}>
          {t(AUTH_TRANSLATIONS.auth.login.button)}
        </button>
        <Link href="/account/forgot-password">{t(AUTH_TRANSLATIONS.auth.login.forgotPassword)}</Link>
        <p>
          <Trans i18nKey={AUTH_TRANSLATIONS.auth.login.signUpInfo}>
            Don't have an account? <Link href="/account/register">Sign up</Link>
          </Trans>
        </p>
      </div>
    </div>
  );
};

export default Login;
