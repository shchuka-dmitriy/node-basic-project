import React from 'react';
import styles from "./LoginButtons.module.sass";
import {Link, withRouter} from "react-router-dom";
import history from "../../browserHistory";
import {clearUserStore} from "../../actions/actionCreator";
import {connect} from "react-redux";

const LoginButtons = ({data, clearUser}) => {
    const logOut = () => {
        localStorage.clear();
        clearUser();
        history.replace('/');
    };

    const renderLoginButtons = () => {
        if (data) {
            return (
                <>
                    <div className={styles.userInfo}>
                        <span className={styles.btn}>{`Hi, ${data.firstName}`}</span>
                        <button onClick={logOut} className={styles.button}>Logout</button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Link to='/login' style={{textDecoration: 'none'}} className={styles.buttonContainer}>
                        <button className={styles.button}>LOGIN</button>
                    </Link>
                    <Link to='/registration' style={{textDecoration: 'none'}} className={styles.buttonContainer}>
                        <button className={styles.button}>SIGN UP</button>
                    </Link>
                </>
            )
        }
    };

    return (
        <>
            { renderLoginButtons() }
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearUser: () => dispatch(clearUserStore())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(LoginButtons));