import React from "react";
import Card from "./components/Card/Card";
import styles from './App.module.css';

const App = () =>{
    return(
        <div className={`${styles['mt-10']} ${styles['container']}`}>
            <Card/>
        </div>
    )
};

export default App;