import { Header } from "@/components/Header";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Pools(){
  return(
    <View>
      <Header title="Meus bolões"/>
      <View className="px-4">
      <TouchableOpacity className="w-full bg-yellow-300 px-6 py-5 items-center justify-center mt-6 rounded-lg flex flex-row gap-3">
        <FontAwesome name="search" size={26} color="black"/>
        <Text className="uppercase font-bold">BUSCAR BOLÃO POR CÓDIGO</Text>
      </TouchableOpacity>
        <View className="w-full border bottom-1 border-gray-600 mt-5"/>
      </View>
    </View>
  )
}