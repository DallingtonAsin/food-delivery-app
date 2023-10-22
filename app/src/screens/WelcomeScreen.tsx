import { SafeAreaView, View, Text, Image, TouchableOpacity, StatusBar } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { themeColors } from "../configs/themes"

const WelcomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <SafeAreaView className="flex-1"
            style={{ backgroundColor: themeColors.bgColor(1) }}>
            <StatusBar backgroundColor={themeColors.bgColor(1)} />
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">
                    Let's Get Started!
                </Text>
                <View className="flex-row justify-center">
                    <Image source={require('../../assets/images/welcome.png')}
                        style={{ width: 350, height: 350 }} />
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        className="mx-7 py-3 bg-yellow-400 rounded-xl"
                        style={{ backgroundColor: themeColors.secondaryColor(1) }}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text className="text-xl font-bold text-center text-white">Sign in</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            className="flex-row justify-center"
                            onPress={() => navigation.navigate('Register')}>
                            <Text className="text-white font-semibold">Don't have an account?</Text>
                            <Text className="font-semibold text-yellow-300 ml-1">Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen