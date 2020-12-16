import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import Error from '../Error/Error';
import { confirmAlert } from 'react-confirm-alert';
import '../../assets/styles/react-confirm-alert.css';
import { registrationAction } from "../../actions/actionCreator";
import CONSTANTS from '../../constants';
import styles from './UserForm.module.sass';
import customValidator from '../../validators/validator';
import Schemes from '../../validators/validationSchemes';

const UserForm = ({ handleSubmit, createUser, error }) => {

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
                        // const data = new FormData();
                        // Object.keys(userData).forEach(key => {
                        //     data.append(key, userData[key]);
                        // });
                        //
                        // createUser(data);
                        createUser(userData);
                        // window.location.assign(CONSTANTS.HOME_URL);
                    }
                },
                {
                    label: 'Cancel',
                }]
        });
    };

    return (
        <div className={styles.loginForm}>
            { error && <Error data={error.data} status={error.status}/> }
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

                <div>
                    <button type='submit'>
                        <span>
                            { "registration" }
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({form, auth}) => {
    const {error} = auth;
    return {form, error};
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (userData) => dispatch( registrationAction(userData) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'authForm',
    enableReinitialize : true,
    validate: customValidator(Schemes.RegistrationSchema)
})(UserForm));