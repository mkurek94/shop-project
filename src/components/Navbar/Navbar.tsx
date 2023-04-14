import React, { useMemo } from "react";
import style from "./Navbar.module.css";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { CATEGORIES } from "@/mocks/categories";

export const Navbar = () => {
  const { cartItems } = useCart();

  const cartQuantity = useMemo(() => {
    let quantity = 0;
    cartItems.forEach((el) => {
      quantity += el.quantity;
    });

    return quantity;
  }, [cartItems]);

  return (
    <nav className={style.container}>
      <div className={style.navbar}>
        <Link href="/">Logo</Link>
        <div>Search...</div>
        <div className={style.accountDetails}>
          <Link href="/account">Account</Link>
          <Link href="/cart">Cart {cartQuantity}</Link>
        </div>
      </div>
      <div className={style.categories}>
        {CATEGORIES.map(category => (
          <span className={style.categoryItem}>{category.name}</span>
        ))}
      </div>
    </nav>
  );
};
