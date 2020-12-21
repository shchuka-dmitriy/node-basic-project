import React, {useEffect} from 'react';
import styles from "../../assets/styles/LoginRegistrationPages.module.sass";
import {Link} from "react-router-dom";
import UserForm from "../UserForm/UserForm";
import LoginForm from "../LoginForm/LoginForm";
import PropTypes from "prop-types";
import {clearErrorSignUpAndLogin} from "../../actions/actionCreator";
import {connect} from "react-redux";

const LoginAuthMainBlock = ({clearError, isRegistrationPage, logo, link, buttonLabel}) => {

    useEffect( () => {
        clearError();
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.wrapperContainer}>
                <div className={styles.headerPage}>
                    <div className={styles.linkLoginContainer}>
                        <Link to={'/'} style={{textDecoration: 'none'}}>
                            <span>To list</span>
                        </Link>
                    </div>
                    <div className={styles.linkLoginContainer}>
                        <Link to={link} style={{textDecoration: 'none'}}>
                            <span>{buttonLabel}</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.headerFormContainer}>
                    <h2 className={styles.formHeader}>
                        { logo }
                    </h2>
                    { isRegistrationPage ? <UserForm/> : <LoginForm/> }
                </div>
            </div>
        </div>
    );
};

LoginAuthMainBlock.propTypes = {
    clearError: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(LoginAuthMainBlock);