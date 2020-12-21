import ACTION from '../actions/actionTypes';

const initialState = {
    isFetching: true,
    error: null,
    data: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
                data: null
            }
        }
        case ACTION.GET_USER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.data
            }
        }
        case ACTION.GET_USER_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                data: null
            }
        }
        case ACTION.CLEAR_USER_STORE:{
            return{
                ...state,
                data: null,
                error: null
            }
        }
        default:
            return state;
    }
}