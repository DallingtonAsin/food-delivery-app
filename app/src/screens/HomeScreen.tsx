import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StatusBar, TextInput, ScrollView } from 'react-native'
import * as Icon from "react-native-feather"
import { themeColors } from '../configs/themes'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { getFeaturedRestaurants } from '../server/api'
import AppLoader from '../components/AppLoader'

const HomeScreen = () => {

    const [featuredRestaurants, setFeaturedRestaurants] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getFeaturedRestaurants().then((restaurants: any) => {
            setFeaturedRestaurants(restaurants)
            setIsLoading(false)
        })
    }, [])

    return (
        <React.Fragment>
            <SafeAreaView className="flex-1 mt-3">
                <StatusBar backgroundColor={themeColors.bgColor(1)} />

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
                            featuredRestaurants.map((item: any, index: number) => {
                                return (
                                    <FeaturedRow
                                        key={index}
                                        title={item.name}
                                        restaurants={item.restaurants}
                                        description={item.description}
                                    />
                                )
                            })
                        }
                    </View>

                </ScrollView>
            </SafeAreaView>
            {isLoading && <AppLoader />}
        </React.Fragment>
    )

}


export default HomeScreen