import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DrawerActions } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { APP_NAME } from '@env'
import HomeScreen from '../../screens/HomeScreen'
import { colors } from '../../configs'

const Stack = createStackNavigator()

const HomeStack: any = (props: any) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTintColor: colors.primary,
                    headerTitle: APP_NAME,
                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingVertical: 12, paddingHorizontal: 16 }} onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
                            <Icon name="bars" size={25} color={colors.gray} />
                        </TouchableOpacity>
                    )
                }}
                 />
        </Stack.Navigator>
    )
}

export default HomeStack