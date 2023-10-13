import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Dimensions } from 'react-native'
import DrawerScreen from '../screens/DrawerScreen'
import BottomTabNavigator from './BottomTabNavigator'
import ContactUsStack from './screen-stacks/ContactUsScreenStack'

const Drawer = createDrawerNavigator()

const AppDrawerStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: Dimensions.get('window').width - 100,
                }
            }}
            drawerContent={(props) => <DrawerScreen {...props} />}>
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
            <Drawer.Screen name="Help" component={ContactUsStack} options={{ drawerLabel: 'Help' }} />
        </Drawer.Navigator>
    )
}

export default AppDrawerStack