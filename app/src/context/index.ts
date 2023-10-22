import React, { useContext } from "react"
import { contextMethods } from "./actions/contextMethods"
import { Context as AuthContext } from '../context/AuthContext'
import { Context as AppContext } from '../context/AppContext'

const createContext = (defaultValue: any) => {
    const appContext = React.createContext({
        state: defaultValue,
        ...contextMethods
    })
    return appContext
}

const useAuth = () => useContext(AuthContext)
const useApp = () => useContext(AppContext)

export { createContext, useAuth, useApp }