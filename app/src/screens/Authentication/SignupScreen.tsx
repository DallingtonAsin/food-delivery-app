import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import * as configs from '../../configs'
import * as Icon from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TextInput } from 'react-native'

const SignupScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <ScrollView className="flex-1 bg-white"
            contentContainerStyle={{ flex: 1 }}
            style={{ backgroundColor: configs.colors.palePurple }}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                        <Icon.ArrowLeft strokeWidth={2} stroke={configs.colors.black} />
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
                    />
                    <Text className="text-gray-700 ml-4">Email</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="Enter email"
                    />
                    <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="Enter password"
                    />
                    <TouchableOpacity className="bg-yellow-400 py-3 rounded-xl">
                        <Text className="font-xl font-bold text-center text-gray-700">Signup</Text>
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
                    <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-500 ml-1">Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignupScreen