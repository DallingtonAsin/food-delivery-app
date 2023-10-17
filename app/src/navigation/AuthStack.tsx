import React, { useEffect, useState } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SigninScreen from "../screens/Authentication/SigninScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import SignupScreen from "../screens/Authentication/SignupScreen"
import OnboardingScreen from "../screens/OnboardingScreen"
import { getItem } from "../async-storage"

const Stack = createNativeStackNavigator()

const AuthStack = () => {

    const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null)
    const [initialRoute, setInitialRoute] = useState<string | null>(null)

    useEffect(() => {
        checkIfAlreadyOnboarded()
    }, [])

    const checkIfAlreadyOnboarded = async () => {
        let onboarded: any = await getItem('onboarded')
        console.log(`onboarded value`, onboarded)
        if (onboarded == 1) {
            setShowOnboarding(false)
            setInitialRoute('Welcome')
        } else {
            setShowOnboarding(true)
            setInitialRoute('Onboarding')
        }
    }

    if (showOnboarding == null || initialRoute == null) {
        return null
    }

    return (
        <Stack.Navigator initialRouteName={initialRoute}>

            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}

            />

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