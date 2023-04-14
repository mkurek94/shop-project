import React, { useMemo } from 'react'
import style from './Navbar.module.css';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export const Navbar = () => {
  const { cartItems } = useCart();

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
