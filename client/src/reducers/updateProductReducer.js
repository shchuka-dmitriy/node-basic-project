import ACTION from '../actions/actionTypes';

const initialState = {
	isFetching: true,
    error: null,
    data: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.UPDATE_PRODUCT_REQUEST: {
            return {
                isFetching: true,
                error: null,
                data: null
            }
        }
        case ACTION.UPDATE_PRODUCT_SUCCESS: {
            return {
                isFetching: false,
                error: null,
                data: action.data
            }
        }
        case ACTION.UPDATE_PRODUCT_ERROR: {
            return {
                isFetching: false,
                error: action.error,
                data: null
            }
        }
        case ACTION.CLEAR_UPDATE_PRODUCT_STORE:{
            return initialState;
        }
        default:
            return state;
    }
}