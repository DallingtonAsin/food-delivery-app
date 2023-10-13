import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as configs from '../configs'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CustomTabComponent } from '../components/navigation/CustomTabComponent'
import { updateUnreadChannels, updateUnreadMessages } from '../redux/reducers/streamChannelSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../redux/store'
import { selectUnreadChannels } from '../redux/reducers/streamChannelSlice'
import { MultiBarProvider, BottomTabBarWrapper } from 'react-native-multibar'
import HomeScreen from '../screens/HomeScreen'

const TabNavigator = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const navigateBack = () => { navigation.goBack() }
  const Tab = React.useRef<ReturnType<typeof createBottomTabNavigator>>(createBottomTabNavigator()).current
  const dispatch: AppDispatch = useDispatch()

  const getUnreadChannels = (state: RootState) => selectUnreadChannels(state)
  const memoizedSelector = createSelector(
    [getUnreadChannels],
    (num: any) => {
      return num
    }
  )
  const unreadChannels = useSelector(memoizedSelector)

  const updateChatCount = (event: any) => {
    if (event.unread_channels !== undefined) {
      const unreadChannelsCount = event.unread_channels
      dispatch(updateUnreadChannels(unreadChannelsCount))
    }

    if (event.total_unread_count !== undefined) {
      const unreadMessagesCount = event.total_unread_count
      dispatch(updateUnreadMessages(unreadMessagesCount))

    }
  }

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

      </Tab.Navigator>
    </MultiBarProvider>
  )
}
export default TabNavigator
