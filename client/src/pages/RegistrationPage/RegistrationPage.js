import React from 'react';
import LoginAuthMainBlock from "../../components/LoginAuthMainBlock/LoginAuthMainBlock";

const RegistrationPage = () => {
    return (
        <LoginAuthMainBlock
            isRegistrationPage={true}
            logo={'CREATE AN ACCOUNT'}
            link={'/login'}
            buttonLabel={'Login'}
        />
    )
};

export default RegistrationPage;
