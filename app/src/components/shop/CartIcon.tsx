import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Icon5 from 'react-native-vector-icons/FontAwesome'
import { selectCart } from '../../redux/reducers/drugsSlice'
import { Drug } from '../../interfaces'
import * as config from '../../configs'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

function CartIcon() {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const cart = useSelector(selectCart)
    const totalQuantity = cart.reduce((total: number, item: Drug) => total + item.quantity, 0)

    return (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Cart')}>
            <Icon5 name="shopping-cart" size={30} color={config.colors.gray} />
            <View style={[config.styles.supCount, { backgroundColor: config.colors.orange }]}>
                <Text style={{ color: config.colors.white, fontSize: 12 }}>{totalQuantity}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CartIcon