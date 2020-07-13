import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-location">
                <p>г. Москва, Пресненская наб. 6, строение 2 ИНН 7724451748 ОГРН 1187746779868</p>
            </div>
            <div className="footer-contact">
                <p>2019 ООО "Джетленд" </p>
                <a href="/">support@jetlend.ru</a> <span> 8 800 222 9332</span>
            </div>
        </footer>
    )
}

export default Footer;
