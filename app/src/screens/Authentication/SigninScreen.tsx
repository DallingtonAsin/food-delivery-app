import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import * as configs from '../../configs'
import * as Icon from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TextInput } from 'react-native'
import { setItem } from '../../async-storage'

const SigninScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const login = async () => {
        await setItem('onboarded', '1')
        navigation.navigate('Onboarding')
    }

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: configs.colors.palePurple }}>
            <SafeAreaView className="flex-">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                        <Icon.ArrowLeft strokeWidth={2} stroke={configs.colors.black} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require('../../../assets/images/login.png')}
                        style={{ width: 200, height: 200 }} />
                </View>
            </SafeAreaView>
            <View
                className="flex-1 bg-white px-8 pt-8"
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Email address</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="Enter email"
                    />
                    <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        placeholder="Enter password"
                    />
                    <TouchableOpacity className="flex items-end mb-5">
                        <Text className="text-gray-700">Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={login}
                        className="bg-yellow-400 py-3 rounded-xl">
                        <Text className="font-xl font-bold text-center text-gray-700">Login</Text>
                    </TouchableOpacity>
                </View>
                <Text className="text-xl font-bold text-gray-700 text-center py-5">
                    Or
                </Text>
                <View className="flex-row justify-center space-x-12">
                    <TouchableOpacity className="bg-gray-100 p-2 rounded-2xl">
                        <Image source={require('../../../assets/icons/google.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-100 p-2 rounded-2xl">
                        <Image source={require('../../../assets/icons/apple.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-100 p-2 rounded-2xl">
                        <Image source={require('../../../assets/icons/facebook.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-4">
                    <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text className="font-semibold text-yellow-500 ml-1">Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SigninScreen