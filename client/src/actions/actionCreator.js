import ACTION from './actionTypes';

export const registrationAction = (data) => {
    return {
        type: ACTION.AUTH_ACTION_REGISTER,
        data: data
    }
};

export const clearErrorSignUpAndLogin = () => {
    return {
        type: ACTION.AUTH_ACTION_CLEAR_ERROR
    }
};