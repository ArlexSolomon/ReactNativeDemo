import * as TYPES from './types'

function login_pending() {
    return {
        type: TYPES.LOGIN_PENDING,
        pending: true,
        isLogin: false,
        error: null,
    };
}

function login_success() {
    return {
        type: TYPES.LOGIN_SUCCESS,
        pending: false,
        isLogin: true,
        error: null,
    }
}

function login_failed(info) {
    return {
        type: TYPES.LOGIN_FAILED,
        pending: false,
        isLogin: false,
        error: info,
    }
}

function logout_pending() {
    return {
        type: TYPES.LOGOUT_PENDING,
        pending: true,
        isLogin: false,
        error: null,
    };
}

function logout_success() {
    return {
        type: TYPES.LOGOUT_SUCCESS,
        pending: false,
        isLogin: true,
        error: null,
    }
}

function logout_failed(info) {
    return {
        type: TYPES.LOGOUT_FAILED,
        pending: false,
        isLogin: false,
        error: info,
    }
}

export function login(user) {
    return (dispatch) => {
        dispatch(login_pending());
        var i = Math.floor(Math.random() * 10);
        if (i > 4) {
            setTimeout(() => {
                dispatch(login_success());
            }, 2000);
        } else {
            setTimeout(() => {
                dispatch(login_failed('User not found'))
            }, 2000);
        }
    }
}

export function logout(user) {
    return (dispatch) => {
        dispatch(logout_pending());
        dispatch(logout_success());
    }
}