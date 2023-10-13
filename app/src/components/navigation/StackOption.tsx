import React from 'react'
import { HeaderBackButton } from '@react-navigation/elements'
import { useTheme } from '@react-navigation/native'

const StackOption: any = (navigation: any, headerTitle: any) => {

    const { colors } = useTheme()
    const config = {
        headerTitle: headerTitle,
        headerLeft: () => <HeaderBackButton tintColor={colors.text}
            onPress={() => navigation.goBack()} />,
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTitleStyle: {
            fontSize: 19,
            fontWeight: 'bold'
        },
        headerTintColor: colors.text
    }

    return config
}

export { StackOption } 