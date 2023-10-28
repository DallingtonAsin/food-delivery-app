import { IUser } from "../../interfaces";

export const contextMethods = {
      
      login: ({ payload, onSuccess, onFailure, onCompletion }: { payload: Partial<IUser>, onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },
      register: ({ payload, onSuccess, onFailure, onCompletion }: { payload: Partial<IUser>, onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },
      signout: () => { },

      getCompanyContacts: ({ onSuccess, onFailure, onCompletion }: { onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },
      getProductCategories: ({ onSuccess, onFailure, onCompletion }: { onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },
      getFeaturedRestaurants: ({ onSuccess, onFailure, onCompletion }: { onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },
      findFeaturedRestaurants: ({ id, onSuccess, onFailure, onCompletion }: { id: number, onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },

}