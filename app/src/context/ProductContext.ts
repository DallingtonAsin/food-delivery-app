import createDataContext from './CreateDataContext'
import { routes } from '../network/routes'
import Service from '../network/services/httpService'
import { appReducer } from './reducers/appReducer'
import { displayErrorMessage } from '../components/common/SharedHelper'

const services = new Service()

const getProductCategories = () => {
    return ({ onSuccess, onFailure, onCompletion }: { onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.get(
            routes.product.categories
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

const getFeaturedRestaurants = () => {
    return ({ onSuccess, onFailure, onCompletion }: { onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.get(
            routes.product.featured_restaurants
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

const findFeaturedRestaurant = () => {
    return ({ id, onSuccess, onFailure, onCompletion }: { id: number, onSuccess: any, onFailure: any, onCompletion: any }) => {
        services.get(
            `${routes.product.featured_restaurants}/${id}`
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
        getProductCategories, getFeaturedRestaurants, findFeaturedRestaurant
    },
    { isAppLoading: true }
)