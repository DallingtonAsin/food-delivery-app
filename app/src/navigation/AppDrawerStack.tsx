import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Dimensions } from 'react-native'
import DrawerScreen from '../screens/DrawerScreen'
import BottomTabNavigator from './BottomTabNavigator'
import ContactUsStack from './screen-stacks/ContactUsScreenStack'
import RestaurantScreen from '../screens/RestaurantScreen'
import CartScreen from '../screens/CartScreen'
import PreparingOrderScreen from '../screens/PreparingOrderScreen'
import DeliveryScreen from '../screens/DeliveryScreen'

const Drawer = createDrawerNavigator()

const AppDrawerStack = () => {

    return (
        <Drawer.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: Dimensions.get('window').width - 100
                }
            }}
            drawerContent={(props) => <DrawerScreen {...props} />}>
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