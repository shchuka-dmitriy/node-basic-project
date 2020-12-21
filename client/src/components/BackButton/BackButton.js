import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './BackButton.module.sass'
import CONSTANTS from "../../constants";

const BackButton = () => {

    function clickHandler(){
        window.location.assign(CONSTANTS.HOME_URL);
    }

    return (
        <div onClick={clickHandler} className={styles.buttonContainer}>
            <span>To list</span>
        </div>
    )
};

export default withRouter(BackButton);


