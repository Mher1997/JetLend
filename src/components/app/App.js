import React from 'react';
import './App.css';
import LeftSide from '../leftSide/LeftSide';
import Header from '../header/Header';
import Documentation from '../documentation/Documentation';
import Footer from '../footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <LeftSide/>
                <div className="content">
                    <Documentation/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
