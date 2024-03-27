import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from './assets/bg-white.png';
export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground source={bg} style={appStyle.app}>

      <SafeAreaView style={appStyle.container}>
        <Header/>
        <View style={appStyle.body}>
          <Text>Hello I'm Main todo List !</Text>
        </View>
      </SafeAreaView>
      </ImageBackground>
        <View style={appStyle.footer}>
          <Text>Hello I'm Footer Filter bloc!</Text>
        </View>
    </SafeAreaProvider>
  );
}
