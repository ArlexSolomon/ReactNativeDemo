import * as TYPES from '../actions/types';

const defaultState = {
    pending: false,
    error: null,
    isLogin: false,
}

export default function login(state = defaultState, action) {
    switch (action.type) {
        case TYPES.LOGIN_PENDING:
            nowState = Object.assign({}, state, {
                pending: action.pending,
                lsLogin: action.isLogin,
                error: action.error
            });
            // alert('LOGIN_PENDING\nPending: ' + nowState.pending + '\nIsLogin: ' + nowState.isLogin + '\nError: ' + nowState.error)
            return nowState
        case TYPES.LOGIN_SUCCESS:
            nowState = Object.assign({}, state, {
                pending: action.pending,
                lsLogin: action.isLogin,
                error: action.error
            });
            // alert('LOGIN_SUCCESS\nPending: ' + nowState.pending + '\nIsLogin: ' + nowState.isLogin + '\nError: ' + nowState.error)
            return nowState
        case TYPES.LOGIN_FAILED:
            nowState = Object.assign({}, state, {
                pending: action.pending,
                lsLogin: action.isLogin,
                error: action.error
            });
            // alert('LOGIN_FAILED\nPending: ' + nowState.pending + '\nIsLogin: ' + nowState.isLogin + '\nError: ' + nowState.error)
            return nowState
        case TYPES.LOGOUT_PENDING:
            nowState = Object.assign({}, state, {
                pending: action.pending,
                lsLogin: action.isLogin,
                error: action.error
            });
            // alert('LOGOUT_PENDING\nPending: ' + nowState.pending + '\nIsLogin: ' + nowState.isLogin + '\nError: ' + nowState.error)
            return nowState
        case TYPES.LOGOUT_SUCCESS:
            nowState = Object.assign({}, state, {
                pending: action.pending,
                lsLogin: action.isLogin,
                error: action.error
            });
            // alert('LOGOUT_SUCCESS\nPending: ' + nowState.pending + '\nIsLogin: ' + nowState.isLogin + '\nError: ' + nowState.error)
            return nowState
        case TYPES.LOGOUT_FAILED:
            nowState = Object.assign({}, state, {
                pending: action.pending,
                lsLogin: action.isLogin,
                error: action.error
            });
            // alert('LOGOUT_FAILED\nPending: ' + nowState.pending + '\nIsLogin: ' + nowState.isLogin + '\nError: ' + nowState.error)
            return nowState
        default:
            // alert('DEFAULT\nPending: ' + state.pending + '\nIsLogin: ' + state.isLogin + '\nError: ' + state.error)
            return state;
    }
}