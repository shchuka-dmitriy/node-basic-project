import React from 'react';
import LoginAuthMainBlock from "../../components/LoginAuthMainBlock/LoginAuthMainBlock";

const LoginPage = () => {
    return (
        <LoginAuthMainBlock
            isRegistrationPage={false}
            logo={'LOGIN TO YOUR ACCOUNT'}
            link={'/registration'}
            buttonLabel={'Sign up'}
        />
    )
};

export default LoginPage;