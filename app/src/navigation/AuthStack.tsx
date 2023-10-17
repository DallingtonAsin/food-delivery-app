import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from "../screens/Authentication/SigninScreen"
import WelcomeScreen from "../screens/Authentication/WelcomeScreen"
import SignupScreen from "../screens/Authentication/SignupScreen"

const Stack = createNativeStackNavigator()

const AuthStack = () => {

    return (
        <Stack.Navigator initialRouteName="Welcome">

            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={SigninScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={SignupScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default AuthStack