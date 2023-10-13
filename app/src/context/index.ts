import React from "react"
import { contextMethods } from "./actions/contextMethods";

const createContext = (defaultValue: any) => {
    const appContext = React.createContext({
        state: defaultValue,
        ...contextMethods      
    });

    return appContext;
}

export { createContext }