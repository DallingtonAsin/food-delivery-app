import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const TabIconWithCount = ({ tabIcon, color, itemCount }: { tabIcon: string, color: string, itemCount: number }) => {

    return (
        <View style={styles.container}>
            <Icon5 name={tabIcon} style={[styles.icon, { color: color }]} />
            {itemCount > 0 && (
                <View style={styles.countContainer}>
                    <Text style={styles.countText}>{itemCount}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    icon: {
        fontSize: 20,
    },
    countContainer: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    countText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default TabIconWithCount;
