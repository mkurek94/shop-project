import React, {
  createContext,
  ReactElement,
  useCallback,
  useState,
} from "react";
import { REGISTERED_USERS } from "@/mocks/registeredUsers";
import { IAccount } from "@/types/acount";

interface IAccountContextValue {
  loggedUser: IAccount;
  isLogged: boolean;
  signIn: (email: string, password: string) => void;
}

interface AccountProviderProps {
  children: ReactElement | ReactElement[];
}

export const AccountContext = createContext<IAccountContextValue>(
  {} as IAccountContextValue
);

export const AccountProvier = ({ children }: AccountProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState<IAccount>({} as IAccount);

  const signIn = useCallback(
    (email: string, password: string) => {
      const user = REGISTERED_USERS.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setIsLogged(true);
        setLoggedUser(user);
      }
    },
    [isLogged]
  );

  const value = {
    signIn,
    isLogged,
    loggedUser,
  };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
