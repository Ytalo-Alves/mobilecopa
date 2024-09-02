import Button from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { View, Image, Text } from "react-native";

export default function SignIn(){

  const {signIn, user} = useAuth()

  return(
    <View className="w-full flex-1 items-center justify-center">
      <Image 
        source={require('@/assets/logo.png')}
        className='w-[212px] h-[40px]'
        resizeMode='contain'
      />
    
      <Button
      onPress={signIn}
      />  

      <Text className='text-center text-zinc-100 mt-4 text-sm'>Não utilizamos nenhuma informação além{'\n'}do seu e-mail para criação de sua conta.</Text>
    </View>
  )
}