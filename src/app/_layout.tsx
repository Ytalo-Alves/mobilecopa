// import { Slot } from "expo-router";
import "@/styles/global.css";

import { View, StatusBar } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Loading from "@/components/Loading";
import { AuthContextProvider } from "@/context/AuthContext";
// import { Find } from "@/screens/Find";
import Pools from "@/screens/Pools";
import { New } from "@/screens/new";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  return (
    <View className="flex-1 bg-zinc-950">
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <Pools /> : <Loading />}
      </AuthContextProvider>
    </View>
  );
}
