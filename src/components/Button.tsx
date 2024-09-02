import { Fontisto } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

export default function Button({...rest}){
  return(
    <TouchableOpacity className='w-full px-6 py-4 flex flex-row gap-2 items-center justify-center bg-red-500 hover:bg-red-600 rounded-md mt-12' {...rest}>
        <Fontisto name='google' size={16} color='white' />
        <Text className='text-zinc-100 uppercase font-bold'>Entrar com o Google</Text>
      </TouchableOpacity>
  )
}