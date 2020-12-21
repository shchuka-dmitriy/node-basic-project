import React from 'react';
import styles from './Error.module.sass';
// import {confirmAlert} from "react-confirm-alert";

const Error = ({ status, data }) => {

    const getMessage = () => {
        switch (status) {
            case 404:
                return data.errors[0].message;
            case 400:
                return 'Check the input data';
            case 409:
                return data.errors[0].message;
            case 406:
                return data.errors[0].message;
            default:
                return 'Server Error';
        }
    };

    return(
        <div className={styles.errorContainer}>
            <span>{ getMessage() }</span>
        </div>
    )
};

export default Error;