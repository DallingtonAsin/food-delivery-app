import React from 'react'
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import Iconf from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Avatar, Text } from 'react-native-paper'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Share from "react-native-share"
import { APP_NAME } from '@env'
import { colors } from '../configs'
import * as Icon from "react-native-feather"
import { drawerScreenItems } from '../configs/constants'
import { themeColors } from '../configs/themes'
import { removeItem } from '../async-storage'
import { useAuth } from '../context'

const url = `https://pivosoft.com`
const title = `Download ${APP_NAME}`
const message = `Download ${APP_NAME} using this link`

const options = {
    title,
    url,
    message
}
const iconSize = 20

const DrawerScreen = (props: any) => {

    const { state } = useAuth()
    const { name, email, countryCode, phoneNumber } = state.user

    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions)
        } catch (err) {
            console.log(err)
        }
    }

    const logout = async () => {
        await removeItem('onboarded')
        props.navigation.navigate('Onboarding')
    }

    return (

        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle="light-content" />
            <DrawerContentScrollView {...props}>
                <View className="flex-1">

                    <View
                        style={{ backgroundColor: themeColors.bgColor(1), height: 200 }}
                        className="justify-center items-center -mt-2">
                        <Avatar.Icon
                            size={100}
                            icon={({ size, color }) => (
                                <Icon.User height={size} width={size} stroke={colors.white} />
                            )}
                            className="mt-3"
                            style={{ backgroundColor: colors.old_gray }}
                        />
                        <Text
                            className="font-extrabold text-white mt-3"
                            style={{ fontSize: 18 }} >
                            {name}
                        </Text>
                        <Text className="font-extrabold text-white" style={{ fontSize: 16 }}>{email}</Text>
                    </View>


                    <View className="w-100 h-100 items-center pt-5">
                        <View style={{ width: '100%' }}>
                            {drawerScreenItems.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} style={[{
                                        // backgroundColor: global.currentScreenIndex === key ? '#F7F5F5' : null
                                    }, styles.drawerItem]} onPress={() => {
                                        // global.currentScreenIndex = key
                                        props.navigation.navigate(item.screenToNavigate)
                                    }}>
                                        <Iconf name={item.icon} size={iconSize} style={styles.drawerIcon} />
                                        <Text style={styles.drawerText}>
                                            {item.text}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}

                        </View>

                        <View style={styles.divider}></View>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity style={styles.drawerItem}
                                onPress={() => share()}>
                                <Iconf name="share-alt" size={iconSize} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>Share</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItem}
                                onPress={() => props.navigation.navigate("About")}>
                                <Iconf name="info-circle" size={iconSize} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>About us</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItem}
                                onPress={() => props.navigation.navigate("Feedback")}>
                                <Iconf name="comments" size={iconSize} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>Send Feedback</Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>

                            <TouchableOpacity style={styles.drawerItem} onPress={logout}>
                                <Icon.LogOut strokeWidth={3} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>Logout</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
export default DrawerScreen


const styles = StyleSheet.create({

    divider: {
        width: '100%',
        height: 1,
        marginTop: 15,
        backgroundColor: '#e2e2e2',
    },
    drawerItem: {
        flexDirection: 'row',
        left: 0,
        paddingTop: 14,
        paddingBottom: 14,
        fontSize: 45
    },
    drawerText: {
        fontSize: 17,
        color: colors.gray
    },
    drawerIcon: {
        marginLeft: 20,
        marginRight: 20,
        color: colors.gray
    }
})