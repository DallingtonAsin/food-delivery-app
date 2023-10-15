import { Image, Text, TouchableWithoutFeedback, View } from "react-native"
import * as Icon from "react-native-feather"
import { themeColors } from "../configs/themes"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const RestaurantCard = ({ item }: { item: any }) => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { ...item })}>
            <View
                style={{
                    shadowColor: themeColors.bgColor(0.2),
                    shadowRadius: 7
                }}
                className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-24">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../../assets/images/fullStar.png')} className="h-4 w-4" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.stars}</Text>
                            <Text className="text-gray-700">
                                {item.reviews} . <Text className="font-semibold">{item.cetgory}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RestaurantCard