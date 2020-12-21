import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import Error from '../Error/Error';
import { confirmAlert } from 'react-confirm-alert';
import '../../assets/styles/react-confirm-alert.css';
import { registrationAction } from "../../actions/actionCreator";
import styles from '../../assets/styles/Form.module.sass';
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchemes';

const UserForm = ({ handleSubmit, createUser, authError }) => {

    const formInputClassNames = {
        container: null,
        input: styles.input,
        valid: styles.valid,
        notValid: styles.notValid,
        warning: styles.fieldWarning
    };

    const onSubmit = (userData) => {
        confirmAlert({
            message: 'Are you sure want to registration?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        createUser(userData);
                    }
                },
                {
                    label: 'Cancel',
                }]
        });
    };

    return (
        <div className={styles.loginForm}>
            { authError && <Error data={authError.data} status={authError.status}/> }
            <form onSubmit={ handleSubmit(onSubmit) }>
                <span className={styles.fieldLabel}>What is your first name?</span>
                <Field
                    name = 'firstName'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'text'
                    label = 'First name'
                />
                <span className={styles.fieldLabel}>What is your last name?</span>
                <Field
                    name = 'lastName'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'text'
                    label = 'Last name'
                />
                <span className={styles.fieldLabel}>What is your email?</span>
                <Field
                    name = 'email'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'email'
                    label = 'Email address'
                />
                <span className={styles.fieldLabel}>What is your password?</span>
                <Field
                    name = 'password'
                    component = {FormInput}
                    classes = {formInputClassNames}
                    type = 'password'
                    label = 'Password'
                />

                <div className={styles.submitContainerWrapper}>
                    <button type='submit' className={styles.submitContainer}>
                        <span className={styles.submitButton}>
                            { "registration" }
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    const authError = state.auth.error;
    return {authError};
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (userData) => dispatch( registrationAction(userData) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'authForm',
    enableReinitialize: true,
    validate: customValidator(Schemes.RegistrationSchema)
})(UserForm));