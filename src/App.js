import React from 'react';
import Auth from "./components/auth";
import './App.css';
import RefFocus from "./components/RefFocus";
import Auido from "./components/auido";
const App = () => {
    return (
        <div>
            <Auth/>
            <RefFocus/>
            <Auido/>
        </div>
    );
};

export default App;
