import { View, Text, TouchableOpacity } from "react-native"
import { themeColors } from "../configs/themes"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useSelector } from "react-redux"
import { selectCartItems, selectCartTotalCost } from "../redux/slices/cartSlice"
import { thousandFormatter } from "../utils"

const CartIconButton = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const cartItems = useSelector(selectCartItems)
    const cartTotalPrice = useSelector(selectCartTotalCost)

    if (!cartItems.length) return

    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
            >
                <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                    <Text className="font-extrabold text-white text-lg">{cartItems.length}</Text>
                </View>
                <Text className="flex-1 text-center font-extrabold text-white text-lg">
                    View Cart
                </Text>
                <Text className="font-extrabold text-white text-lg">
                    ${thousandFormatter(cartTotalPrice)}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartIconButton