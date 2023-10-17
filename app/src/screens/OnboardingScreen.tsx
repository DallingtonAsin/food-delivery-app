import { View, Text, Image, Dimensions, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import { colors } from "../configs"
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { setItem } from "../async-storage"

const { width } = Dimensions.get('window')

const OnboardingScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    const handleDone = async () => {
        await setItem('onboarded', '1')
        navigation.navigate('Welcome')
    }

    const DoneButton = ({ ...props }) => (
        <TouchableOpacity
            {...props}
            style={styles.doneButton}
            onPress={handleDone}
        >
            <Text>Done</Text>
        </TouchableOpacity>
    )

    return (
        <View
            className="flex-1"
            style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle={'light-content'} />

            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={DoneButton}
                bottomBarHighlight={false}
                containerStyles={{
                    paddingHorizontal: 15
                }}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    style={styles.lottieView}
                                    source={require('../../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Use this app to access any item of your choice',
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    style={styles.lottieView}
                                    source={require('../../assets/animations/work.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Work seemlessly',
                        subtitle: 'Get your work done seemlessly without interruption',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    style={styles.lottieView}
                                    source={require('../../assets/animations/achieve.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'By boosting your productivity we help you to achieve higher goals',
                    }
                ]}
            />
        </View>
    )

}

export default OnboardingScreen

const styles = StyleSheet.create({
    lottie: {
        width: width * 0.9,
        height: width
    },
    lottieView: {
        flex: 1
    },
    doneButton: {
        padding: 20
    }
})