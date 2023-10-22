import React from 'react'
import { Text } from 'react-native'
import * as config from '../../../configs'
import { TabBar } from 'react-native-tab-view'
import { themeColors } from '../../../configs/themes'

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        renderLabel={({ route, focused }) => (
            <Text style={{ color: focused ? themeColors.bgColor(1) : config.colors.black, fontSize: config.fonts.medium_15, fontWeight: '400' }}>
                {route.title}
            </Text>
        )}
        indicatorStyle={{ backgroundColor: themeColors.bgColor(1) }}
        style={{ backgroundColor: config.colors.white }} />
)

export { renderTabBar}