import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import * as Icon from "react-native-feather"
import { themeColors } from '../configs/themes'
import Categories from '../components/Categories'
import { featured } from '../configs/data'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = (props: any) => {

    const [featuredCategories, setFeaturedCategories] = useState<any>([])

    useEffect(() => {
        setFeaturedCategories(featured)
    }, [])

    return (
        <SafeAreaView className="flex-1 mt-3">
            <StatusBar
                barStyle="dark-content"
            />

            {/* search bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Products' className="ml-2 flex-1" keyboardType='default' />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">Kampala, Uganda</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(2) }} className="p-3 rounded-full">
                    <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
                </View>
            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}>

                <Categories />

                {/* featured  */}
                <View className="mt-5">
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>

            </ScrollView>

        </SafeAreaView>
    )

}


export default HomeScreen