import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native"
import { colors } from "../../configs"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const WelcomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <SafeAreaView className="flex-1"
            style={{ backgroundColor: colors.palePurple }}>
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">
                    Let's Get Started!
                </Text>
                <View className="flex-row justify-center">
                    <Image source={require('../../../assets/images/welcome.png')}
                        style={{ width: 350, height: 350 }} />
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        className="mx-7 py-3 bg-yellow-400 rounded-xl"
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text className="text-xl font-bold text-center text-gray-700">Sign up</Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-yellow-400 ml-1">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen