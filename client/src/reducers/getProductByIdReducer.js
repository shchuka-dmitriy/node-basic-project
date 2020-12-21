import ACTION from '../actions/actionTypes';

const initialState = {
    isFetching: true,
    selectProductData: null,
    error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_PRODUCT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
                selectProductData: null
            }
        }
        case ACTION.GET_PRODUCT_BY_ID_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                selectProductData: action.data
            }
        }
        case ACTION.GET_PRODUCT_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                selectProductData: null
            }
        }
        default:
            return state;
    }
}