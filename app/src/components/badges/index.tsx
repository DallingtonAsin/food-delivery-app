import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles as configStyles, colors, fonts } from '../../configs';

const SuccessBadge = ({ text }: { text: string }) => (
    <View>
        <Text style={[styles.status, configStyles.completedTxt]}>{text}</Text>
    </View>
);

const WarningBadge = ({ text }: { text: string }) => (
    <View>
        <Text style={[styles.status, styles.warningBadge]}>{text}</Text>
    </View>
);

export { SuccessBadge, WarningBadge }

const styles = StyleSheet.create({
    successBadge: {
        backgroundColor: '#87CBAE',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        width: 80,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    warningBadge: {
        backgroundColor: '#FFFFB2',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        width: 80,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    badgeText: {
        fontSize: fonts.normal,
        opacity: 0.90,
        fontWeight: '300',
        borderRadius: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    status: {
        fontSize: fonts.normal,
        fontWeight: '400',
        borderRadius: 5,
        textAlign: 'center',
        padding: 5
    },

});