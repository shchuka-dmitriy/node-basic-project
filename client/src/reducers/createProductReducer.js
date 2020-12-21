import ACTION from '../actions/actionTypes';

const initialState = {
    createdProduct: null,
    products: null,
    error: null,
    data: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.CREATE_PRODUCT_SUCCESS:{
            return{
                ...state,
                error: null,
                createdProduct: action.data
            }
        }

        case ACTION.DELETE_PRODUCT_SUCCESS:{
            return{
                ...state,
                error: null,
                products: action.data,
            }
        }
        case ACTION.PRODUCT_ERROR:{
            return{
                ...state,
                error: action.error,
            }
        }

        default:
            return state;
    }
};