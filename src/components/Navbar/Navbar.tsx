import React, { useContext, useMemo } from 'react'
import { CartContext } from '@/providers/CartProvider';
import style from './Navbar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const cartQuantity = useMemo(() => {
    let quantity = 0;
    cartItems.forEach(el => {
      quantity += el.quantity;
    })

    return quantity;
  }, [cartItems])

  return (
    <nav className={style.navbar}>
        <Link href="/">Logo</Link>
        <div>Search...</div>
        <div className={style.accountDetails}>
        <Link href="/account">Account</Link>
            <Link href="/cart">Cart {cartQuantity}</Link>
        </div>
    </nav>
  )
}
