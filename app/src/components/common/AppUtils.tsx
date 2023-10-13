import React from 'react'
import { getUniqueId } from 'react-native-device-info';
import { NetworkInfo } from "react-native-network-info";
import messaging from '@react-native-firebase/messaging';
import { Linking } from 'react-native';
import { organisation } from '../../configs/constants';

const getDeviceId = async() => {
    let device_id = await getUniqueId()
    return device_id
}

const getIPAddress = async () => {
    let ip_address: any = await NetworkInfo.getIPAddress();
    return ip_address
}

const getToken = async () => {
    const token = await messaging().getToken()
    return token
}

const togglePasswordVisibility = (showPassword: boolean, setShowPassword: React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowPassword(!showPassword);
  };

  const handlePrivacyPolicyPress = () => {
    Linking.openURL(organisation.links.privacy_policy)
}

const handleTermsPress = () => {
    Linking.openURL(organisation.links.terms_and_conditions)
}

const handleMWorkerTermsPress = () => {
    Linking.openURL(organisation.links.terms_and_conditions)
}
  

export { getDeviceId, getIPAddress, getToken, togglePasswordVisibility, handlePrivacyPolicyPress, handleTermsPress, handleMWorkerTermsPress }