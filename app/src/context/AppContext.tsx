import createDataContext from './CreateDataContext'
import { routes } from '../network/routes'
import Service from '../network/services/httpService'
import { appReducer } from './reducers/appReducer'
import { displayErrorMessage } from '../components/common/SharedHelper'

const services = new Service()

const changePassword = () => {
    return ({ payload, onSuccess, onFailure, onCompletion }: { payload: any, onSuccess: any, onFailure: any, onCompletion: any }) => {
        const endpoint = `${routes.login}`
        services.post(
            endpoint,
            payload
        ).then(async (res) => {
            if (res && res.data) {
                onSuccess(res.data.message)
            }
        }).catch((error) => {
            displayErrorMessage(error, onFailure)
        }).finally(() => {
            onCompletion()
        })
    }
}

const getCompanyContacts = () => {
    return ({ onSuccess, onFailure, onCompletion }: { onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.get(
            routes.company.contacts
        ).then(async (res) => {
            if (res && res.data) {
                const data = res.data.data
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
        changePassword, getCompanyContacts
    },
    { isAppLoading: true }
)