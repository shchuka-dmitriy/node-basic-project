import ACTION from '../actions/actionTypes';

const initialState = {
    products: null,
    isFetching: true,
    error: null,
    haveMore: true
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.products,
                isFetching: false,
                haveMore: action.haveMore,
                error: null
            };
        }

        case ACTION.DELETE_PRODUCT_SUCCESS:{
            return{
                ...state,
                error: null,
                products: action.data,
            }
        }

        case ACTION.PRODUCT_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}