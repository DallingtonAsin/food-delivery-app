import AsyncStorage from '@react-native-async-storage/async-storage'

const setItem = async (key: any, value: any) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        throw error
    }
}

const getItem = async (key: any) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (error) {
        throw error
    }
}

const removeItem = async (key: any) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        throw error
    }
}

export { setItem, getItem, removeItem }