import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAccount } from "@/hooks/useAccount";
import styles from '../../styles/Account.module.css';

const Account = () => {
  const { isLogged, loggedUser } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/account/login");
    }
  }, [isLogged]);

  return (
  <>
    {isLogged && loggedUser ? (
        <div className={styles.container}>
            <h1>Welcome {loggedUser.name}</h1>
            <Link href="/account/details">Account details</Link>
            <Link href="/account/orders">Your orders</Link>
        </div>
    ) : null}
  </>
  );
};

export default Account;
