import React, { useContext, useEffect } from "react";
import { AccountContext } from "@/providers/AccountProvider";
import { useRouter } from "next/router";
import Link from "next/link";

const Account = () => {
  const { isLogged, loggedUser } = useContext(AccountContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/account/login");
    }
  }, [isLogged]);

  return (
  <>
    {isLogged && loggedUser ? (
        <div>
            <h1>Welcome {loggedUser.name}</h1>
            <Link href="/account/details">Account details</Link>
            <Link href="/account/orders">Your orders</Link>
        </div>
    ) : null}
  </>
  );
};

export default Account;
