import React from 'react';
import {data} from './calendarData';
import './Calendar.css';

const Calendar = () => {

    const dateCreator = month => {
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        const result = [];

        for(let i=0; i<month; i++){
            result.push(
                <div className="calendar-month" key={i}>
                    <p>{months[i]}</p>
                </div>
            )
        }

        return result;
    }

    return (
        <div className="calendar">
            {data.map((elem, index) => (
                    <div className={`calendar-year ${!elem.approve ? 'year-canceled' : ''}`} key={index}>
                        <div className="calendar-year-count">
                            <p>{elem.year}</p>
                        </div>
                        <div className="calendar-months">
                            {dateCreator(elem.months)}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Calendar
