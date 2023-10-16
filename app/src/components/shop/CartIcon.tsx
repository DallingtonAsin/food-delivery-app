import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Icon5 from 'react-native-vector-icons/FontAwesome'
import { selectCart } from '../../redux/slices/drugsSlice'
import { Drug } from '../../interfaces'
import * as config from '../../configs'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { themeColors } from '../../configs/themes'
import { selectCartTotalItems } from '../../redux/slices/cartSlice'

function CartIcon() {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const totalCartItems = useSelector(selectCartTotalItems)

    return (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Cart')}>
            <Icon5 name="shopping-cart" size={30} color={config.colors.gray} />
            <View style={[config.styles.supCount, { backgroundColor: themeColors.bgColor(1) }]}>
                <Text style={{ color: config.colors.white, fontSize: 12 }}>{totalCartItems}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CartIcon