import { AppAction } from '../../interfaces'
import * as types from '../actions'

const appReducer = (state: any, action: AppAction): any => {

    switch (action.type) {
        case types.RESTORE_TOKEN:
            return {
                ...state,
                authorization: action.token,
                token: action.token,
                isAppLoading: false,
            }
        case types.USER_SIGNIN:
            return {
                user: null,
                authorization: action.payload.token,
                token: null
            }
        case types.USER_VERIFY:
            return {
                user: null,
                authorization: action.payload.token,
                token: null
            }
        case types.USER_SIGNUP:
            return {
                user: null,
                authorization: action.payload.token,
                token: null
            }
        case types.HOME:
            return {
                user: action.payload,
                authorization: action.payload.token,
                token: action.payload.token,
                isAppLoading: false
            }
        case types.USER_SIGNOUT:
            return {
                user: null,
                authorization: null,
                token: null
            }
        case types.HYDRATE:
            return {
                user: action.payload,
                authorization: action.payload.token,
                token: action.payload.token,
                isAppLoading: false
            }
        case types.STOP_SPINNER:
            return {
                ...state,
                isAppLoading: false
            }
        default:
            return state
    }
}

export { appReducer }