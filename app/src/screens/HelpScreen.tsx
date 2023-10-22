import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import * as configs from '../configs'
import { callPhoneNumber, inboxWhatsappNumber, sendEmail, sendSms } from '../components/common/communications'
import { IContactListItem } from '../interfaces'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'

const HelpScreen = () => {

    const initialListData = [
        { id: 1, type: 'Telephone', value: `+256774014727`, icon: 'phone-alt', method: callPhoneNumber },
        { id: 2, type: 'SMS', value: `+256700477421`, icon: 'sms', method: sendSms },
        { id: 3, type: 'Whatsap', value: `+2567867180`, icon: 'whatsapp', method: inboxWhatsappNumber },
        { id: 4, type: 'Email', value: `info@pivosoft.com`, icon: 'envelope', method: sendEmail }
    ]
    const [isLoading, setIsLoading] = useState(true)
    const [listData, setListData] = useState<IContactListItem[]>(initialListData)

    const HelpCard = ({ item }: { item: IContactListItem }) => {
        return (
            <TouchableOpacity
                className="flex-1 flex-row justify-between border-2 border-gray-200  rounded-lg p-2 mx-6 my-2"
                onPress={() => item.method(item.value)}>
                <View className="flex flex-row justify-center items-center">
                    <Icon name={item.icon} size={25} color={configs.colors.primary} style={{ justifyContent: 'center', alignSelf: 'center' }} />
                    <View className="h-10 w-0.5 bg-gray-300 mx-3"></View>
                    <View className="">
                        <Text className="text-lg font-normal">{item.type}</Text>
                        <Text className="text-sm font-normal">{item.value}</Text>
                    </View>
                </View>
                <View className="flex justify-center">
                    <Icon name="angle-right" size={20} color={configs.colors.primary} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1">
                <Text className="font-normal text-lg text-gray-500 text-center my-3">Nelp help? Please contact us.</Text>
                <FlatList
                    data={listData}
                    renderItem={HelpCard}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                    style={{ top: 20, bottom: 40 }} />
            </View>
        </SafeAreaView>
    )
}

export default HelpScreen