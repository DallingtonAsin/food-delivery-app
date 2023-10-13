import { createStackNavigator } from "@react-navigation/stack"
import { StackOption } from "../../components/navigation/StackOption"
import HelpScreen from "../../screens/HelpScreen"

const Stack = createStackNavigator()

const ContactUsStack = ({ navigation }: { navigation: any }) => {
    return (
        <Stack.Navigator initialRouteName="Help">
            <Stack.Screen name="Help" component={HelpScreen}
                options={() => (StackOption(navigation, 'Contact Us'))} />
        </Stack.Navigator>
    )
}

export default ContactUsStack