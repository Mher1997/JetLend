import React from 'react';
import menu from '../../icons/menu.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-title">
                <div className="mobile-menu sm-show">
                    <img src={menu} alt="menu"/>
                </div>
                <h2>ООО “Ромашка обыкновенная” ИНН 1234567890</h2>
            </div>
            <div className="header-end">
                <div className="with-icon quest-icon"></div>
                <div className="header-logout">
                    <p className="with-icon logout-icon">Выйти</p>
                </div>
            </div>
        </header>
    )
}

export default Header
