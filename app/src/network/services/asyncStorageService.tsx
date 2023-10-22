import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialUserState } from '../../configs/constants';

const storeAuthToken = async (authToken: string) => {
    try {
        let value = JSON.stringify(authToken);
        await AsyncStorage.setItem("authorization", value);
    } catch (error) {
        throw error;
    }
}

const getAuthToken = async () => {
    try {
        let authToken = await AsyncStorage.getItem("authorization");
        authToken = authToken ? JSON.parse(authToken) : null;

        return authToken;
    } catch (err) {
        throw err;
    }
}

const storePasswordResetToken = async (authToken: string) => {
    try {
        let value = JSON.stringify(authToken);
        await AsyncStorage.setItem("resetPasswordToken", value);
    } catch (error) {
        throw error;
    }
}

const getPasswordResetToken = async () => {
    try {
        let authToken = await AsyncStorage.getItem("resetPasswordToken");
        authToken = authToken ? JSON.parse(authToken) : null;

        return authToken;
    } catch (err) {
        throw err;
    }
}

const storeUser = async (user: any) => {

    try {
        let value = JSON.stringify(user);
        await AsyncStorage.setItem("user", value);
    } catch (error) {
        throw error;
    }
}

const getUser = async () => {
    try {
        let user: any = await AsyncStorage.getItem("user");
        user = user ? JSON.parse(user) : initialUserState;

        return user;
    } catch (err) {
        throw err;
    }
}

const removeUser = async () => {
    try {
        await AsyncStorage.removeItem("user");
    } catch (err) {
        throw err;
    }
}

const removeAuthToken = async () => {
    try {
        await AsyncStorage.removeItem("authorization");
    } catch (err) {
        throw err;
    }
}

export {
    storeAuthToken, getAuthToken, removeAuthToken, storeUser, getUser, removeUser,
    storePasswordResetToken, getPasswordResetToken
}