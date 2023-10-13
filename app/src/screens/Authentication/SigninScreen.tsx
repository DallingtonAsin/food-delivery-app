import React, { useState, useRef, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import * as configs from '../../configs'
import { TextInput } from 'react-native-paper'
import AppLoader from '../../components/AppLoader'
import { getAppVersion, isValidEmail, removeLeadingZeros } from '../../components/common/SharedHelper'
import { Context as AuthContext } from '../../context/authContext'
import { displayMessage } from '../../components/common/SharedHelper'
import { getDeviceId, getIPAddress, getToken } from '../../components/common/AppUtils'
import TouchableImage from '../../components/TouchableImage'

const SigninScreen = (props: any) => {

    const [value, setValue] = useState("")
    const [valid, setValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isPhoneLogin, setIsPhoneLogin] = useState(true)
    const [selectedImage, setSelectedImage] = useState<string>('image1')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [isDoctor, setIsDoctor] = useState(false)
    const currentUserType = isDoctor ? 'doctor' : 'patient'

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const submit = async () => {
    }

    const login = (payload: any, is_patient: boolean) => {
        setIsLoading(true)
    }

    const onSuccess = async (data: any) => {
     
    }

    const stopLoading = () => {
        setIsLoading(false)
    }

    const onChangePhoneNumber = (text: string) => {
        setValue(text)
        const isValid = text && text.length >= 9 ? true : false
        setValid(isValid)
    }

    const onChangeCountry = (country: any) => {
        const name = country.name
        const isValid = name.toString().toLowerCase() === 'uganda'
        setValid(isValid)
    }

    const handleImagePress = (image: string) => {
        setSelectedImage(image)
        if (image == 'image2') {
            setIsDoctor(true)
        } else {
            setIsDoctor(false)
        }
    }

    // if(!clientIsReady){
    //     return <AppLoader/>
    // }


    return (
        <React.Fragment>
            <ScrollView
                style={configs.styles.registration.doctor.scrollView}
                contentContainerStyle={configs.styles.registration.doctor.scrollContainer}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Text style={{ color: configs.colors.gray, fontSize: configs.fonts.large }}>Choose Account Type</Text>
                    </View>

                </View>

                <View style={styles.body}>
                    <Text style={styles.title}>{currentUserType} Login</Text>
                    <View>
                    
                        {!isPhoneLogin &&
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    mode='outlined'
                                    label="Email"
                                    style={styles.textInput}
                                    value={email}
                                    placeholder='Enter your email'
                                    onChangeText={(text) => setEmail(text)}
                                    activeOutlineColor={configs.colors.primary}
                                />
                            </View>}

                        <View style={styles.textInputContainer}>
                            <TextInput
                                mode='outlined'
                                label="Password"
                                style={styles.textInput}
                                secureTextEntry={!showPassword}
                                value={password}
                                placeholder='Enter your password'
                                onChangeText={(text) => setPassword(text)}
                                right={<TextInput.Icon icon={showPassword ? 'eye' : 'eye-off'} size={24} onPress={togglePasswordVisibility} />}
                                activeOutlineColor={configs.colors.primary}
                            />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setIsPhoneLogin(!isPhoneLogin)}>
                                {isPhoneLogin && <Text style={styles.loginOption}>Click here to login using email instead!</Text>}
                                {!isPhoneLogin && <Text style={styles.loginOption}>Click here to login using phone number instead!</Text>}
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginVertical: 20 }}>
                            <TouchableOpacity style={[{ marginVertical: 5 }]} onPress={() => { props.navigation.navigate('PwdResetVerificationInput') }}>
                                <Text style={{ color: configs.colors.gray, textAlign: 'center' }}>Forgot your password?. Click here to reset</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



                <View style={styles.footer}>
                    <TouchableOpacity
                        disabled={false}
                        style={configs.styles.primaryBtn}
                        onPress={() => submit()}>
                        <Text style={configs.styles.continueText}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        disabled={false}
                        style={[valid ? configs.styles.secondaryBtn : configs.styles.secondaryBtn, { marginVertical: 10 }]}
                        onPress={() => props.navigation.goBack()}>
                        <Text style={configs.styles.btnText}>Back</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>

            {isLoading && <AppLoader />}

        </React.Fragment>
    )
}

export default SigninScreen



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: configs.colors.white,
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 25,
    },

    body: {
        flex: 1,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        alignItems: 'center',
        width: '100%',
        marginTop: 0,
    },

    row: {
        flexDirection: 'row',
        marginTop: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: configs.colors.gray,
        textTransform: 'capitalize'
    },

    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },

    touchableContainer: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingVertical: 12,
        margin: 8,
    },

    image: {
        width: 50,
        height: 50,
    },

    activeContainer: {
        borderColor: configs.colors.primary
    },

    activeImage: {

    },

    loginTxt: {
        fontSize: configs.fonts.extraLarge,
        color: configs.colors.secondary,
        opacity: 0.8,
        textTransform: 'uppercase'
    },

    roleText: {
        color: configs.colors.gray,
        marginTop: 15,
    },

    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        marginHorizontal: 0,
        marginTop: 15,
    },

    textInput: {
        flex: 1,
        fontSize: configs.fonts.large,
        paddingLeft: 10,
        animationDuration: '1s',
        animationName: 'blink',
        animationIterationCount: 'infinite',
    },

    loginOption: {
        fontSize: configs.fonts.medium,
        color: configs.colors.terms,
        textAlign: 'center'
    }

})