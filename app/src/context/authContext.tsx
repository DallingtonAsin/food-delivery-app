import createDataContext from './createDataContext'
import { routes } from '../network/routes'
import Service from '../network/services/httpService'
import { storeUser, storeAuthToken, storeAccessToken, removeAuthToken, removeAccessToken, removeUser, getUser, storePasswordResetToken } from '../network/services/asyncStorageService'
import { appReducer } from './reducers/appReducer'
import { initialUserState } from '../configs/constants'
import { displayErrorMessage } from '../components/common/SharedHelper'
import * as types from './actions'
const services = new Service()

const signin = (dispatch: any) => {
    return ({ payload, is_patient, onSuccess, onFailure, onCompletion }: { payload: any, is_patient: boolean, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? routes.patient.signin : routes.doctor.signin
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const user = res.data
                const access_token = user.access_token
                await storeAccessToken(access_token)
                await storeUser(user)

                if (user.profile_status == 1) {
                    await storeAuthToken(access_token)
                    dispatch({
                        type: types.HOME,
                        payload: user
                    })
                } else {
                    dispatch({
                        type: types.USER_SIGNUP,
                        payload: user
                    })
                }
                onSuccess(user)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const sendVerificationCode = (dispatch: any) => {
    return ({ payload, is_patient, onSuccess, onFailure, onCompletion }: { payload: any, is_patient: boolean, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? routes.patient.send_otp : routes.doctor.send_otp
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const data = res.data
                await storeAuthToken(data.access_token)

                dispatch({
                    type: types.USER_SIGNIN,
                    payload: data
                })

                onSuccess(data)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}


const verifyCode = (dispatch: any) => {
    return ({ code, is_patient, onSuccess, onFailure, onCompletion }: { code: string, is_patient: boolean, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? routes.patient.verify_otp : routes.doctor.verify_otp
        services.post(
            endpoint,
            { otp: code }
        ).then(async (res) => {

            if (res && res.data) {

                const data = res.data
                let access_token = data.access_token
                await storeAuthToken(access_token)

                if (data.profile_status == 1) {
                    await storeAccessToken(access_token)
                    await storeUser(data)
                    dispatch({
                        type: types.HOME,
                        payload: data
                    })
                } else {
                    dispatch({
                        type: types.USER_SIGNUP,
                        payload: data
                    })
                }

                onSuccess(data)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const signup = (dispatch: any) => {
    return ({ payload, onSuccess, onFailure, onCompletion }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.post(
            routes.patient.register,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const user = res.data
                await storeAccessToken(user.access_token)
                await storeUser(user)

                if (user.profile_status == 1) {
                    await storeAuthToken(user.access_token)
                    dispatch({
                        type: types.HOME,
                        payload: user
                    })
                }

                onSuccess(user)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const authenticateDoctor = (dispatch: any) => {
    return ({ payload, onSuccess, onFailure, onCompletion }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.post(
            routes.doctor.signin,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const data = res.data
                let access_token = data.access_token
                await storeAuthToken(access_token)

                if (data.profile_status == 1) {
                    await storeAccessToken(access_token)
                    await storeUser(data)
                    dispatch({
                        type: types.HOME,
                        payload: data
                    })
                } else {
                    dispatch({
                        type: types.USER_SIGNUP,
                        payload: data
                    })
                }

                onSuccess(data)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const registerDoctor = (dispatch: any) => {
    return ({ payload, onSuccess, onFailure, onCompletion }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.post(
            routes.doctor.register,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const user = res.data
                await storeAccessToken(user.access_token)
                await storeUser(user)

                if (user.profile_status == 1) {
                    await storeAuthToken(user.access_token)
                    dispatch({
                        type: types.HOME,
                        payload: user
                    })
                }
                onSuccess(user)
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
        await removeAccessToken()
        dispatch({
            type: types.USER_SIGNOUT,
            payload: { isAppLoading: false }
        })
    }
}

const updateUserState = (dispatch: any) => {
    return async ({ onSuccess }: { onSuccess: any }) => {
        const user = await getUser()
        if (user && user.access_token) {
            dispatch({
                type: types.HYDRATE,
                payload: user
            })

            onSuccess()
        }
    }
}

const sendPwdResetVerificationCode = () => {
    return ({ is_patient, payload, onSuccess, onFailure, onCompletion }: { is_patient: boolean, payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? `${routes.patient.passwords.reset.verification_code}` : `${routes.doctor.passwords.reset.verification_code}`
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {
                const user = res.data
                const access_token = user.access_token
                await storeAccessToken(access_token)
                await storeUser(user)
                onSuccess()
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const verifyPasswordResetOtp = () => {
    return ({ is_patient, payload, onSuccess, onFailure, onCompletion }: { is_patient: boolean, payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? `${routes.patient.passwords.reset.verify_otp}` : `${routes.doctor.passwords.reset.verify_otp}`
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {
                const user = res.data
                const access_token = user.access_token
                const reset_token = user.reset_token

                await storeAccessToken(access_token)
                await storePasswordResetToken(reset_token)
                await storeUser(user)
                onSuccess()
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const resetPassword = (dispatch: any) => {
    return ({ is_patient, payload, onSuccess, onFailure, onCompletion }: { is_patient: boolean, payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? `${routes.patient.passwords.reset.reset}` : `${routes.doctor.passwords.reset.reset}`
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {

                const user = res.data
                const access_token = user.access_token

                await storeAccessToken(access_token)
                await storeAuthToken(access_token)
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

const verifyEmail = (dispatch: any) => {
    return ({ is_patient, payload, onSuccess, onFailure, onCompletion }: { is_patient: boolean, payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? routes.patient.verify_email : routes.doctor.verify_email
        services.post(
            endpoint,
            payload
        ).then(async (res: any) => {
            if (res && res.data) {

                const data = res.data
                const user = data.user
                const message = data.message

                await storeAccessToken(user.access_token)
                await storeUser(user)

                if (user.profile_status == 1) {
                    await storeAuthToken(user.access_token)
                    dispatch({
                        type: types.HOME,
                        payload: user
                    })
                }
                onSuccess(message)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const getStreamChatToken = () => {
    return ({ is_patient, onSuccess, onFailure, onCompletion }: { is_patient: boolean, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? routes.stream_chat.token.patient : routes.stream_chat.token.doctor
        services.get(
            endpoint
        ).then(async (res) => {
            if (res && res.data) {
                const data = res.data.data
                console.log(`Stream chat token:`, data)
                onSuccess(data)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const updateFcmToken = () => {
    return ({ is_patient, payload, onFailure }: { is_patient: boolean, payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = is_patient ? routes.patient.update_fcm_token : routes.doctor.update_fcm_token
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

const getAppConfigurations = () => {
    return ({ onSuccess, onFailure, onCompletion }: { onSuccess: any, onFailure: any, onCompletion: any }) => {
        console.log(`Your endpoint`, `${routes.configurations.app}`)
        services.get(
            `${routes.configurations.app}`
        ).then(async (res) => {
            if (res && res.data) {
                const data = res.data
                console.log(`app configurations`, data)
                onSuccess(data)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

export const { Provider, Context } = createDataContext(
    appReducer,
    {
        signin, sendVerificationCode, verifyCode, signup, authenticateDoctor, registerDoctor, updateUserState, verifyEmail,
        sendPwdResetVerificationCode, verifyPasswordResetOtp, resetPassword, getStreamChatToken, updateFcmToken, getAppConfigurations, signout
    },
    { user: initialUserState, token: null, authorization: null, isAppLoading: true },
)