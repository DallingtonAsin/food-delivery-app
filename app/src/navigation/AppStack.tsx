import React, { useContext } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from "./TabNavigator"
import HomeScreen from "../screens/HomeScreen"
import { Context as AuthContext } from '../context/authContext'
import { colors } from '../configs'

const Stack = createNativeStackNavigator()

type headerRight = () => void

const headerOptions = (title: string, headerBackVisible: boolean = true, headerShown: boolean = true, headerRight?: headerRight) => {
    let options: any = {
        headerStyle: {
            backgroundColor: colors.white,
        },
        headerTintColor: colors.primary,
        headerTitle: title,
        headerBackVisible: headerBackVisible,
        headerShown: headerShown,
    }
    if (headerRight) {
        options.headerRight = headerRight
    }
    return options
}

const AppStackScreen = () => {

    const { state } = useContext(AuthContext)
    const { user } = state

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={user.is_registered ? TabNavigator : HomeScreen}
                options={headerOptions(`Home`, false, false)}
            />

        </Stack.Navigator>
    )
}

export default AppStackScreen