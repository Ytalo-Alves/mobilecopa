import { Header } from "@/components/Header";
import { Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";

export function Find(){
  return(
    <View className="w-full flex-1 items-center bg-gray-900">
      <Header title="Buscar por código" showBackButton/>
      <View className="w-[375px] px-7 items-center ">

        <Text className="text-zinc-100 text-2xl font-bold text-center mt-8 leading-10">Encontre um bolão através de seu código único</Text>
      
      <TextInput
      className="w-full bg-zinc-800 px-6 py-8 h-[26px] rounded-lg mt-8 text-zinc-100 placeholder:text-zinc-400 border border-zinc-700"
      placeholder="Qual nome do seu bolão?" />

      <TouchableOpacity className="w-full bg-yellow-300 hover:bg-yellow-500 px-6 py-5 items-center justify-center mt-3 rounded-lg">
        <Text className="uppercase font-bold">Buscar bolão</Text>
      </TouchableOpacity>
      
      </View>
      
    </View>
  )
}