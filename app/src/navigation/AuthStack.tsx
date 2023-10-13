import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from "../screens/SplashScreen"
import SigninScreen from "../screens/Authentication/SigninScreen"

const Stack = createNativeStackNavigator()

const AuthStack = () => {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default AuthStack