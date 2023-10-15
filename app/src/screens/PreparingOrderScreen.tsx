import { useEffect } from "react"
import { Image, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const PreparingOrderScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    useEffect(() => {
        setTimeout(() => {
            //  move to delivery screen
            navigation.navigate('Delivery')
        }, 3000)
    }, [])
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../../assets/images/bikeGuy2.gif')} className="h-80 w-80" />
        </View>
    )
}

export default PreparingOrderScreen