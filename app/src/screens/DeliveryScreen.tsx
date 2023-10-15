import { Text, View } from "react-native"
import { featured } from "../configs/data"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import MapView, { Marker } from "react-native-maps"

const DeliveryScreen = () => {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
        <View className="flex-1">
             {/* map view  */}
             <MapView
              initialRegion={{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }}
              className="flex-1"
              mapType="standard"
             >
                <Marker
                  coordinate={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng
                  }}
                />
             </MapView>
        </View>
    )
}

export default DeliveryScreen