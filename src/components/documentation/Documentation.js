import React from 'react';
import Calendar from '../calendar/Calendar';
import './Documentation.css';

const Documentation = () => {

    return (
        <div className="documentation">
            <h1>Загрузите документацию</h1>
            <div className="cards">
                <div className="card">
                    <div className="card-title">
                        <p>Загрузите копию паспорта директора и учредителей компании: основной разворот и регистрация.</p>
                    </div>
                    <div className="card-line">
                        <a className="green-link" href="/">Иванов Иван Иванович</a>
                        <div className="events">
                            <a href="/" className="with-icon file-icon">xnjfhtghajkffv.jpg</a>
                            <a href="/" className="with-icon file-icon">wothnfb...du.jpg</a>
                        </div>
                    </div>
                    <div className="card-line">
                        <p>Константинопольский Константин Константинович</p>
                        <div className="events">
                            <a href="/" className="with-icon file-icon buttone-default-blue">Разворот</a>
                            <a href="/" className="with-icon file-icon buttone-default-blue">Регистрация</a>
                        </div>
                    </div>
                    <div className="card-line">
                        <p>Петров Петр Петрович</p>
                        <div className="events">
                            <a href="/" className="with-icon file-icon buttone-default-blue">Разворот</a>
                            <a href="/" className="with-icon file-icon buttone-default-blue">Регистрация</a>
                        </div>
                    </div>
                    <div className="card-line">
                        <p>Константинопольская Констанция Константиновна</p>
                        <div className="events">
                            <a href="/" className="with-icon file-icon buttone-default-blue">Разворот</a>
                            <a href="/" className="with-icon file-icon buttone-default-blue">Регистрация</a>
                        </div>
                    </div>
                </div>
                <div className="card custom-card">
                    <div className="card-title">
                        <p>Загрузите банковские выписки за последние 24 месяца в формате .txt (1C) по следующим счетам:</p>
                        <span>Загрузите выписки за период 06.06.2017 по 06.06.2020. Это позволит повысить вероятность одобрения.</span>
                    </div>
                    <div className="card-line">
                        <p>40702810301500023683 (АО "ТИНЬКОФФ БАНК")</p>
                        <div className="events with-icon success-icon">
                            <a href="/" className="with-icon file-icon buttone-default-blue">Разворот</a>
                        </div>
                    </div>
                    <div className="card-line">
                        <p>40702810301500023683 (МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК")</p>
                        <div className="events with-icon warning-icon">
                            <a href="/" className="with-icon file-icon buttone-default-blue">Прикрепить</a>
                        </div>
                    </div>
                    <div className="card-line">
                        <p>40702810301500023683 (Филиал "Бизнес" ПАО "Совкомбанк" (Москва))</p>
                        <div className="events with-icon warning-icon">
                            <a href="/" className="with-icon file-icon buttone-default-blue">Разворот</a>
                        </div>
                    </div>
                </div>
            </div>
            <Calendar/>
            <div className="submit-content">
                <button className="buttone-default-blue">Отправить на оценку</button>
            </div>
        </div>
    )
}

export default Documentation;