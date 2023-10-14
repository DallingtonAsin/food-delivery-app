import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Avatar, Text } from 'react-native-paper'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Share from "react-native-share"
import { APP_NAME } from '@env'
import { colors } from '../configs'
import Icon5 from 'react-native-vector-icons/FontAwesome5'

const url = `https://pivosoft.com`
const title = `Download ${APP_NAME}`
const message = `Download ${APP_NAME} using this link`

const options = {
    title,
    url,
    message
}

const DrawerScreen = (props: any) => {

    const iconSize = 20

    const items = [
        {
            icon: 'home',
            text: 'Home',
            screenToNavigate: 'Home',
        },

        {
            icon: 'user-circle',
            text: 'Profile',
            screenToNavigate: 'Profile',
        },

        {
            icon: 'shopping-cart',
            text: 'My Orders',
            screenToNavigate: 'Weather',
        },
    ]

    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions)
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <Avatar.Icon
                            size={100}
                            icon={({ size, color }) => (
                                <Icon name="user" size={size} color={colors.white} />
                            )}
                            style={{ backgroundColor: colors.old_gray }}
                        />
                        <Text style={{
                            marginTop: 5, fontSize: 18,
                            fontWeight: 'bold',
                            color: colors.black,
                            opacity: 0.8
                        }}>
                            {`Dallington`} {`Asingwire`}
                        </Text>
                        <Text style={{ marginBottom: 15, fontSize: 16, color: colors.black, opacity: 0.7 }}>{`+256774014727`}</Text>
                    </View>


                    <View style={styles.sideMenuContainer}>
                        <View style={styles.divider}></View>
                        <View style={{ width: '100%' }}>
                            {items.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} style={[{
                                        // backgroundColor: global.currentScreenIndex === key ? '#F7F5F5' : null
                                    }, styles.drawerItem]} onPress={() => {
                                        // global.currentScreenIndex = key
                                        props.navigation.navigate(item.screenToNavigate)
                                    }}>
                                        <Icon name={item.icon} size={iconSize} style={styles.drawerIcon} />
                                        <Text style={styles.drawerText}
                                        >
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
                                <Icon name="share-alt" size={iconSize} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>Share</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItem}
                                onPress={() => props.navigation.navigate("About")}>
                                <Icon name="info-circle" size={iconSize} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>About us</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItem}
                                onPress={() => props.navigation.navigate("Feedback")}>
                                <Icon name="comments" size={iconSize} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>Send Feedback</Text>
                            </TouchableOpacity>

                            <View style={styles.divider}></View>

                            <TouchableOpacity style={styles.drawerItem} onPress={() => {
                                props.navigation.navigate('Settings')
                            }}>
                                <FontAwesome name="cog" size={iconSize * 1.2} style={styles.drawerIcon} />
                                <Text style={styles.drawerText}>Settings</Text>
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

    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 5,
    },
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