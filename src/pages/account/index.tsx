import React, { useContext, useEffect } from "react";
import { AccountContext } from "@/providers/AccountProvider";
import { useRouter } from "next/router";

const Account = () => {
  const { isLogged } = useContext(AccountContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/account/login");
    }
  }, [isLogged]);

  return (
  <>
    {isLogged ? (<div>Account page</div>) : null}
  </>
  );
};

export default Account;
