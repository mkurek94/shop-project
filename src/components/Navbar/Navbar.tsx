import React, { useContext, useMemo } from 'react'
import { CartContext } from '@/providers/CartProvider';
import style from './Navbar.module.css';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const router = useRouter();

  const cartQuantity = useMemo(() => {
    let quantity = 0;
    cartItems.forEach(el => {
      quantity += el.quantity;
    })

    return quantity;
  }, [cartItems])

  return (
    <nav className={style.navbar}>
        <span>Logo</span>
        <div>Search...</div>
        <div className={style.accountDetails}>
            <span>Account</span>
            <span onClick={() => router.push(`/cart`)}>Cart {cartQuantity}</span>
        </div>
    </nav>
  )
}
