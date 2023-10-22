import React, { TouchableOpacity, StyleSheet, ViewStyle } from "react-native"
import * as config from '../../configs'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { themeColors } from "../../configs/themes";

const CircularButton = ({ icon = 'plus',
    size = 20,
    iconColor = config.colors.white,
    backgroundColor = themeColors.bgColor(1),
    btnStyle,
    onPress
}: { icon?: string, size?: number, iconColor?: string, backgroundColor?: string, btnStyle?: ViewStyle, onPress: any }) => (
    <TouchableOpacity onPress={onPress} style={[circularBtn(backgroundColor), btnStyle && btnStyle]}>
        <Icon5 name={icon} size={size} color={iconColor} />
    </TouchableOpacity>
);

const BottomRightButton = ({
    icon = 'plus',
    size = 20,
    iconColor = config.colors.white,
    backgroundColor = themeColors.bgColor(1),
    btnStyle,
    onPress
}: { icon?: string, size?: number, iconColor?: string, backgroundColor?: string, btnStyle?: ViewStyle, onPress: any }) => (
    <TouchableOpacity onPress={onPress} style={[circularBottomRightBtn(backgroundColor), btnStyle && btnStyle]}>
        <Icon5 name={icon} size={size} color={iconColor} />
    </TouchableOpacity>
);

const circularBtn = (backgroundColor = themeColors.bgColor(1)): ViewStyle => {
    return {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const circularBottomRightBtn = (backgroundColor = themeColors.bgColor(1)): ViewStyle => {
    return {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        position: 'absolute',
        bottom: 20,
        right: 20
    }
}

export { CircularButton, BottomRightButton }