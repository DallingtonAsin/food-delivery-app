import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native"
import { useState } from "react"
import { themeColors } from "../configs/themes";
import RestaurantCard from "./RestaurantCard";

interface FeaturedRowProps {
    title: string;
    description: string;
    restaurants: any;
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ title, description, restaurants }) => {

    return (
        <View className="mt-4">
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-gray-500 text-sm">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5">
                {
                    restaurants.map((restaurant: any, index: number) => {
                        return (
                            <RestaurantCard key={index} item={restaurant} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )

}

export default FeaturedRow