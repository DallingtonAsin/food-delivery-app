import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import * as configs from '../../configs'
import * as Icon from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TextInput } from 'react-native'
import { useAuth } from '../../context'
import { displayMessage } from '../../components/common/SharedHelper'
import { validateUserRegistration } from '../../components/common/validation'
import { IUser } from '../../interfaces'
import { initialUser } from '../../configs/constants'
import AppLoader from '../../components/AppLoader'
import { getDeviceId, getIpAddress } from 'react-native-device-info'

const SignupScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<IUser>(initialUser)
    const { register } = useAuth()

    const submit = async () => {
        const validationError = validateUserRegistration(user)
        if (validationError) {
            displayMessage(validationError)
            return
        }

        const deviceId = await getDeviceId()
        const ipAddress = await getIpAddress()
        const user_details = {
            name: user.name,
            email: user.email,
            password: user.password,
            uniqueDeviceId: deviceId,
            ipAddress: ipAddress
        }

        setIsLoading(true)
        register({ payload: user_details, onSuccess: onSuccess, onFailure: displayMessage, onCompletion: () => setIsLoading(false) })
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
            <ScrollView className="flex-1 bg-white"
                contentContainerStyle={{ flex: 1 }}
                style={{ backgroundColor: configs.colors.onboardingColor }}>
                <SafeAreaView className="flex">
                    <View className="flex-row justify-start">
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="bg-orange-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                            <Icon.ArrowLeft strokeWidth={2} stroke={configs.colors.white} />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center">
                        <Image source={require('../../../assets/images/signup.png')}
                            style={{ width: 165, height: 110 }} />
                    </View>
                </SafeAreaView>
                <View
                    className="flex-1 bg-white px-8 pt-8"
                    style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                >
                    <View className="form space-y-2">
                        <Text className="text-gray-700 ml-4">Full Name</Text>
                        <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                            placeholder="Enter name"
                            onChangeText={(text: string) => setState('name', text)}
                        />
                        <Text className="text-gray-700 ml-4">Email</Text>
                        <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                            placeholder="Enter email"
                            onChangeText={(text: string) => setState('email', text)}
                        />
                        <Text className="text-gray-700 ml-4">Password</Text>
                        <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                            placeholder="Enter password"
                            secureTextEntry={true}
                            onChangeText={(text: string) => setState('password', text)}
                        />
                        <TouchableOpacity onPress={submit} className="bg-orange-400 py-4 rounded-xl">
                            <Text className="font-xl font-bold text-center text-white">Signup</Text>
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
                    <View className="mt-4">
                        <TouchableOpacity
                            className="flex-row justify-center"
                            onPress={() => navigation.navigate('Login')}>
                            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                            <Text className="font-semibold text-orange-400 ml-1">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {isLoading && <AppLoader />}
        </React.Fragment>
    )
}

export default SignupScreen