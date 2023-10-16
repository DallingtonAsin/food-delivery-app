import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Dimensions } from 'react-native'
import DrawerScreen from '../screens/DrawerScreen'
import BottomTabNavigator from './BottomTabNavigator'
import ContactUsStack from './screen-stacks/ContactUsScreenStack'
import RestaurantScreen from '../screens/RestaurantScreen'
import CartScreen from '../screens/CartScreen'
import PreparingOrderScreen from '../screens/PreparingOrderScreen'
import DeliveryScreen from '../screens/DeliveryScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import { getItem } from '../async-storage'

const Drawer = createDrawerNavigator()

const AppDrawerStack = () => {

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
            setInitialRoute('Home')
        } else {
            setShowOnboarding(true)
            setInitialRoute('Onboarding')
        }
    }

    if (showOnboarding == null || initialRoute == null) {
        return null
    }

    return (
        <Drawer.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: Dimensions.get('window').width - 100
                }
            }}
            drawerContent={(props) => <DrawerScreen {...props} />}>
            <Drawer.Screen name="Onboarding" component={OnboardingScreen} />
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
            <Drawer.Screen name="Help" component={ContactUsStack} />
            <Drawer.Screen name="Restaurant" component={RestaurantScreen} />
            <Drawer.Screen name="Cart" component={CartScreen} />
            <Drawer.Screen name="OrderPreparing" component={PreparingOrderScreen} />
            <Drawer.Screen name="Delivery" component={DeliveryScreen} />
        </Drawer.Navigator>
    )
}

export default AppDrawerStack