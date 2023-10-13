import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as configs from '../configs'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CustomTabComponent } from '../components/navigation/CustomTabComponent'
import { MultiBarProvider, BottomTabBarWrapper } from 'react-native-multibar'
import HomeScreen from '../screens/HomeScreen'

const BottomTabNavigator = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const navigateBack = () => { navigation.goBack() }
  const Tab = React.useRef<ReturnType<typeof createBottomTabNavigator>>(createBottomTabNavigator()).current

  return (
    <MultiBarProvider
      overlayProps={{
        expandingMode: 'staging',
      }}
      data={[]}
      initialExtrasVisible={false}>
      <Tab.Navigator
        tabBar={props => (
          <BottomTabBarWrapper params={props.navigation}>
            <BottomTabBar {...props} />
          </BottomTabBarWrapper>
        )}
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: configs.colors.primary,
          tabBarInactiveTintColor: configs.colors.dark,
          tabBarStyle: {
            backgroundColor: configs.colors.white,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            textAlign: 'center',
          },
          tabBarLabelPosition: 'below-icon',
        }}>

        <Tab.Screen
          name="HomeTabScreen"
          component={HomeScreen}
          options={CustomTabComponent({ headerShown: false, headerTitle: 'Home', tabBarLabel: 'Home', tabIcon: 'home', onPressBackButton: navigateBack })}
        />

        <Tab.Screen
          name="ShopTabScreen"
          component={HomeScreen}
          options={CustomTabComponent({ headerShown: false, headerTitle: 'Shop', tabBarLabel: 'Shop', tabIcon: 'home', onPressBackButton: navigateBack })}
        />

        <Tab.Screen
          name="HelpTabScreen"
          component={HomeScreen}
          options={CustomTabComponent({ headerShown: false, headerTitle: 'Help', tabBarLabel: 'Help', tabIcon: 'question-circle', onPressBackButton: navigateBack })}
        />

      </Tab.Navigator>
    </MultiBarProvider>
  )
}
export default BottomTabNavigator
