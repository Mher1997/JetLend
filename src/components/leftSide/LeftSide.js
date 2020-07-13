import React from 'react';
import logo from '../../icons/logo.svg';
import user from '../../icons/user.svg';
import  './LeftSide.css';

const LeftSide = () => {
    return(
        <div className="left-side">
            <div className="left-side-title">
                <img src={logo} alt="logo"/>
                <h2>JetLend</h2>
            </div>
            <div className="left-side-nav">
                <ul>
                    <li>Идентификация</li>
                    <li className="active">Документация</li>
                    <li className="disabled">Решение</li>
                    <li className="disabled">Верификация</li>
                    <li className="disabled">Перевод средств</li>
                </ul>
            </div>
            <div className="left-side-footer">
                <div className="left-side-info">
                    <img src={user} alt="user"/>
                    <div>
                        <h3>Азамат Хугаев</h3>
                        <p>Ваш персональный менеджер</p>
                        <p className="with-icon whatsapp-icon">+7 (968) 865-65-26</p>
                        <p className="with-icon message-icon">ak@jetlend.ru</p>
                    </div>
                </div>
                <div className="left-side-contact">
                    <p className="with-icon phone-icon">8 (800) 222 93-32</p>
                    <p className="with-icon message-icon">support@jetlend.ru</p>
                </div>
            </div>
        </div>
    )
}

export default LeftSide;