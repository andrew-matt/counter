import React from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Counter} from "./components/counter/Counter";

function App() {
    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
