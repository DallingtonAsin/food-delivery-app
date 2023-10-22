import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, StatusBar } from 'react-native'
import * as configs from '../../configs'
import * as Icon from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TextInput } from 'react-native'
import Toast from 'react-native-simple-toast'
import { useAuth } from '../../context'
import { displayMessage } from '../../components/common/SharedHelper'
import AppLoader from '../../components/AppLoader'
import { themeColors } from '../../configs/themes'

const SigninScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { login } = useAuth()

    const submit = async () => {
        if (!email) {
            Toast.show(`Enter your email address`, Toast.LONG)
        }
        if (!password) {
            Toast.show(`Enter your password`, Toast.LONG)
        }
        const credentials = {
            email: email,
            password: password
        }
        setIsLoading(true)
        login({ payload: credentials, onSuccess: onSuccess, onFailure: displayMessage, onCompletion: () => setIsLoading(false) })
    }

    const onSuccess = () => {
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <View className="flex-1 bg-white" style={{ backgroundColor: configs.colors.palePurple }}>
                <StatusBar barStyle={'light-content'}/>
                <SafeAreaView className="flex-">
                    <View className="flex-row justify-start">
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="bg-orange-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                            <Icon.ArrowLeft strokeWidth={2} stroke={configs.colors.white} />
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
                            value={email}
                            onChangeText={(text: string) => setEmail(text)}
                        />
                        <Text className="text-gray-700 ml-4">Password</Text>
                        <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                            placeholder="Enter password"
                            value={password}
                            onChangeText={(text: string) => setPassword(text)}
                        />
                        <TouchableOpacity className="flex items-end mb-5">
                            <Text className="text-gray-700">Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={submit}
                            className="bg-orange-400 py-4 rounded-xl">
                            <Text className="font-xl font-bold text-center text-white">Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Text className="text-xl font-bold text-gray-700 text-center py-4">
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
                    <View className="flex-row justify-center mt-3">
                        <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}>
                            <Text className="font-semibold text-orange-400 ml-1">Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {isLoading && <AppLoader />}
        </>
    )
}

export default SigninScreen