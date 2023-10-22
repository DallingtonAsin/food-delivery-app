import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, StatusBar } from 'react-native'
import * as configs from '../../configs'
import * as Icon from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TextInput } from 'react-native'
import { useAuth } from '../../context'
import { displayMessage } from '../../components/common/SharedHelper'
import AppLoader from '../../components/AppLoader'
import { IUser } from '../../interfaces'
import { initialUser } from '../../configs/constants'
import { validateUserLogin } from '../../components/common/validation'
import { getDeviceId, getIpAddress } from 'react-native-device-info'
import { themeColors } from '../../configs/themes'

const SigninScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<IUser>(initialUser)
    const { login } = useAuth()

    const submit = async () => {
        const validationError = validateUserLogin(user)
        if (validationError) {
            displayMessage(validationError)
            return
        }
        const deviceId = await getDeviceId()
        const ipAddress = await getIpAddress()

        const credentials = {
            email: user.email,
            password: user.password,
            uniqueDeviceId: deviceId,
            ipAddress: ipAddress
        }
        setIsLoading(true)
        login({ payload: credentials, onSuccess: onSuccess, onFailure: displayMessage, onCompletion: () => setIsLoading(false) })
    }

    const onSuccess = () => {
        setUser(initialUser)
    }

    const setState = (field: string, text: any) => {
        setUser((prev: any) => ({
            ...prev,
            [field]: text,
        }))
    }

    return (
        <React.Fragment>
            <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bgColor(1) }}>
                <StatusBar backgroundColor={themeColors.bgColor(1)} />
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
                            value={user.email}
                            onChangeText={(text: string) => setState('email', text)}
                        />
                        <Text className="text-gray-700 ml-4">Password</Text>
                        <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                            placeholder="Enter password"
                            value={user.password}
                            onChangeText={(text: string) => setState('password', text)}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity className="flex items-end mb-3">
                            <Text className="text-gray-700">Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={submit}
                            style={{ backgroundColor: themeColors.secondaryColor(1) }}
                            className="py-4 rounded-xl">
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
                    <View className="mt-3">
                        <TouchableOpacity
                            className="flex-row justify-center"
                            onPress={() => navigation.navigate('Register')}>
                            <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
                            <Text className="font-semibold text-orange-400 ml-1">Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {isLoading && <AppLoader />}
        </React.Fragment>
    )
}

export default SigninScreen