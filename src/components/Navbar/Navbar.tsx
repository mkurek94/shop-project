import React from 'react'
import style from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <span>Logo</span>
        <div>Search...</div>
        <div>
            <span>Account</span>
            <span>Basket</span>
        </div>
    </nav>
  )
}
