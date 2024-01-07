import React from 'react';
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.js'
import { Body } from './components/Body.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MyApp = () => {
    return (
        <div>
            <Header />
            <Body /> 
        </div>
    )
}


root.render(<MyApp />)