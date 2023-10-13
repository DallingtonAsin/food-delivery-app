import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StackOption } from './StackOption'

const Stack = createStackNavigator()

interface StackComponentProps {
    navigation: any;
    initialRouteName: string;
    screenName: string;
    screenComponent: React.ComponentType;
}

const StackComponent: React.FC<StackComponentProps> = ({
    navigation,
    initialRouteName,
    screenName,
    screenComponent
}) => {
    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
            <Stack.Screen name={screenName} component={screenComponent}
                options={() => (StackOption(navigation, 'Contact Us'))} />
        </Stack.Navigator>
    )
}

export default StackComponent