import React from 'react'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import * as configs from '../../configs'
import TabIconWithCount from './TabIconWithCount'
import { themeColors } from '../../configs/themes'

const CustomTabComponent = ({ headerShown = false, headerTitle, tabBarLabel, tabIcon, onPressBackButton, hasCount = false, count }:
  { headerShown?: boolean, tabBarLabel: string, headerTitle: string, tabIcon: string, onPressBackButton: any, hasCount?: boolean, count?: number }): any => ({
    tabBarIcon: ({ color }: { color: string }) => {
      if (hasCount && count) {
        return <TabIconWithCount tabIcon={tabIcon} color={color} itemCount={count} />
      } else {
        return <Icon5
          name={tabIcon}
          style={{
            fontSize: 20,
            color: color,
          }} />
      }
    },
    headerShown: headerShown,
    headerStyle: {
      borderBottomWidth: 0.5,
      borderBottomColor: configs.colors.silver,
      height: 60,
      elevation: 2,
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 3 }
    },
    headerLeft: () => (
      <Icon5
        name="arrow-left"
        size={20}
        onPress={onPressBackButton}
        style={{ marginLeft: 15, color: themeColors.bgColor(1) }}
      />
    ),
    title: headerTitle,
    headerTitleAlign: 'left',
    headerTitleStyle: { color: themeColors.bgColor(1), marginLeft: 20, fontWeight: 'normal' },
    tabBarLabel: tabBarLabel,
    tabBarLabelStyle: {
      fontSize: configs.fonts.normal
    }
  })

export { CustomTabComponent }