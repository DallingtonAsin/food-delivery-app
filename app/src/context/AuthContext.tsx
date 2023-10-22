import createDataContext from './CreateDataContext'
import { routes } from '../network/routes'
import Service from '../network/services/httpService'
import { storeUser, storeAuthToken, removeAuthToken, removeUser, getUser, storePasswordResetToken } from '../network/services/asyncStorageService'
import { appReducer } from './reducers/appReducer'
import { initialUserState } from '../configs/constants'
import { displayErrorMessage } from '../components/common/SharedHelper'
import * as types from './actions'
const services = new Service()

const login = (dispatch: any) => {
    return ({ payload, onSuccess, onFailure, onCompletion }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = routes.login
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const user = res.data.data
                const token = user.token
                await storeUser(user)
                await storeAuthToken(token)

                dispatch({
                    type: types.HOME,
                    payload: user
                })

                onSuccess()
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const register = (dispatch: any) => {
    return ({ payload, onSuccess, onFailure, onCompletion }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.post(
            routes.register,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const user = res.data.data
                const token = user.token
                await storeUser(user)
                await storeAuthToken(token)

                dispatch({
                    type: types.HOME,
                    payload: user
                })

                onSuccess()
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const signout = (dispatch: any) => {
    return async () => {
        await removeUser()
        await removeAuthToken()
        dispatch({
            type: types.USER_SIGNOUT,
            payload: { isAppLoading: false }
        })
    }
}

const updateUserState = (dispatch: any) => {
    return async ({ onSuccess }: { onSuccess: any }) => {
        const user = await getUser()
        if (user && user.token) {
            dispatch({
                type: types.HYDRATE,
                payload: user
            })
            onSuccess()
        }
    }
}

const resetPassword = (dispatch: any) => {
    return ({ payload, onSuccess, onFailure, onCompletion }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = routes.login
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const user = res.data
                const token = user.token

                await storeAuthToken(token)
                await storeUser(user)

                dispatch({
                    type: types.HOME,
                    payload: user
                })

                onSuccess()
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const updateFcmToken = () => {
    return ({ payload, onFailure }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = routes.login
        services.put(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {
                const data = res.data
                const message = data.message
                console.log(`message`, message)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        })
    }
}

export const { Provider, Context } = createDataContext(
    appReducer,
    {
        login, register, updateUserState, resetPassword, updateFcmToken, signout
    },
    { user: initialUserState, token: null, authorization: null, isAppLoading: true }
)