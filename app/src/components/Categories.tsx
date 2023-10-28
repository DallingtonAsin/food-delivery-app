import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native"
import { useEffect, useState } from "react"
import { Category } from "../interfaces"
import { urlFor } from "../server/sanity"
import { useProduct } from "../context"
import { displayErrorMessage } from "./common/SharedHelper"

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState<number | null>(null)
    const { getProductCategories } = useProduct()

    const getCategories = () => {
        getProductCategories({ onSuccess: onSuccess, onFailure: displayErrorMessage, onCompletion: () => { } })
    }

    const onSuccess = (categories: any) => {
        setCategories(categories)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories.map((category: Category, index) => {
                        let isActive = category._id == activeCategory;
                        let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
                        let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';
                        return (
                            <View key={index} className="flex justify-center items-center mr-6" >
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(category._id)}
                                    className={`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}>
                                    <Image style={{ width: 45, height: 45 }} source={{ uri: urlFor(category.image).url() }} />
                                </TouchableOpacity>
                                <Text className={`text-sm ${textClass}`}>{category.name}</Text>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default Categories