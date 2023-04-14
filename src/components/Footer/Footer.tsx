import React from 'react'
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.infoSection}>
            <ul>
                <li><h3>About Us</h3></li>
                <li><a href="#">Our materials</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
                <li><h3>Shopping</h3></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Returns and Complaints</a></li>
                <li><a href="#">Payment and Delivery</a></li>
            </ul>
            <div className={styles.newsletterSection}>
                <h3>NEWSLETTER</h3>
                <p>Subscribe to receive updates, access to exclusive deals and more.</p>
                <input type="email" placeholder="Enter your email address"/>
                <button>Subscribe</button>
            </div>
        </div>
        <div>
            <span>@ 2023 COPYRIGHT</span>
        </div>
    </footer>
  )
}
