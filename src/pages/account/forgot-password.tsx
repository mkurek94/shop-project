import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { AUTH_TRANSLATIONS } from "@/constants/translations";
import styles from "../../styles/Auth.module.css";
import Link from "next/link";

type ForgotPasswordForm = {
  email: string;
};

const onSave = (values: ForgotPasswordForm) => {
  console.log(values);
};

const forgotPassword = () => {
  const { handleSubmit, register } = useForm<ForgotPasswordForm>();
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
        <div className={styles.form}>
      <h1>{t(AUTH_TRANSLATIONS.auth.forgotPassword.header)}</h1>
      <p>{t(AUTH_TRANSLATIONS.auth.forgotPassword.text)}</p>
      <input
        type={t(AUTH_TRANSLATIONS.auth.forgotPassword.input) as string}
        placeholder="E-mail"
        {...register("email")}
      />
      <button onClick={handleSubmit(onSave)}>{t(AUTH_TRANSLATIONS.auth.forgotPassword.button)}</button>
      <Link href="/account/login">{t(AUTH_TRANSLATIONS.auth.forgotPassword.return)}</Link>
      </div>
    </div>
  );
};

export default forgotPassword;
