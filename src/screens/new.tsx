import { Header } from "@/components/Header";
import { Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";

export function New(){
  return(
    <View className="w-full flex-1 items-center bg-gray-900">
      <Header title="Criar novo bolão"/>
      <View className="w-[375px] px-7 items-center ">
      <Image 
        source={require('@/assets/logo.png')}
        className='w-40 mt-10'
        resizeMode='contain'
      />

      <Text className="text-2xl text-zinc-100 text-center font-bold mt-8">Crie seu próprio bolão da copa e compartilhe entre amigos!</Text>

      
      <TextInput
      className="w-full bg-zinc-800 px-6 py-8 h-[26px] rounded-lg mt-8 text-zinc-100 placeholder:text-zinc-400 border border-zinc-500"
      placeholder="Qual nome do seu bolão?" />

      <TouchableOpacity className="w-full bg-yellow-500 px-6 py-5 items-center justify-center mt-3 rounded-lg">
        <Text className="uppercase font-bold">criar meu bolão</Text>
      </TouchableOpacity>
      
      <Text className="text-zinc-100 mt-10 text-center font-bold leading-7">Após criar seu bolão, você receberá um{'\n'} código único que poderá usar para convidar{'\n'} outras pessoas.</Text>
      </View>
      
    </View>
  )
}