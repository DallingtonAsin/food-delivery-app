import { IUser } from "../../interfaces";

export const contextMethods = {
      
      login: ({ payload, onSuccess, onFailure, onCompletion }: { payload: Partial<IUser>, onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },
      register: ({ payload, onSuccess, onFailure, onCompletion }: { payload: Partial<IUser>, onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },
      signout: () => { },

      getCompanyContacts: ({ onSuccess, onFailure, onCompletion }: { onSuccess: Function, onFailure: Function, onCompletion: Function }) => { },

}