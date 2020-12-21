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

export const headerRequest = (data) => {
    return {
        type: ACTION.HEADER_REQUEST_AUTHORIZE,
        id: data
    }
};

export const clearUserStore = () => {
    return {
        type: ACTION.CLEAR_USER_STORE
    }
};

export const clearAuth = () => {
    return {
        type: ACTION.AUTH_ACTION_CLEAR
    }
};

export const authActionLogin = (data) => {
    return {
        type: ACTION.AUTH_ACTION_LOGIN,
        data: data
    }
};

export const createProductAction = (data) => {
    return {
        type: ACTION.CREATE_PRODUCT_ACTION,
        data: data
    }
};

export const getProductAction = (data) => {
    return {
        type: ACTION.GET_PRODUCT_ACTION,
        replace: data
    }
};

export const getProductsAction = (data) => {
    return {
        type: ACTION.GET_PRODUCTS_ACTION,
        data: data
    }
};

export const getProductByIdAction = (data) => {
    return {
        type: ACTION.GET_PRODUCT_BY_ID_ACTION,
        id: data
    }
};

export const deleteProductAction = (data) => {
    return {
        type: ACTION.DELETE_PRODUCT_ACTION,
        id: data
    }
};

export const updateProductAction = (data, id) => {
    return {
        type: ACTION.UPDATE_PRODUCT_ACTION,
        data: data,
        id: id
    }
};