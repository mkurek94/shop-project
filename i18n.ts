import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          auth: {
            register: {
              button: "Sign up",
              header: "Sign up!",
              signInInfo: "Already have an account? <1>Sign in!</1>",
              form: {
                name: "Name",
                email: "E-mail",
                password: "Password",
                confirmPassword: "Confirm password",
              },
            },
            login: {
              header: "Sign in!",
              button: "Sign in",
              signUpInfo: "Don't have an account? <1>Sign up.</1>",
              form: {
                email: "E-mail",
                password: "Password",
              },
              forgotPassword: "Forgot password",
            },
            forgotPassword: {
                header: "Forgot passowrd?",
                button: "Reset password",
                text: "Don't worry, we can help you reset your password.",
                input: "E-mail",
                return: "or return to log in."
            },
            required: "This input is required"
          },
        },
      },
    },
  });
