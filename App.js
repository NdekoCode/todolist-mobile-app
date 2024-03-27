import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyle.container}>
        <View style={appStyle.header}>
          <Text>Hello I'm the Header!</Text>
        </View>
        <View style={appStyle.body}>
          <Text>Hello I'm Main todo List !</Text>
        </View>
      </SafeAreaView>
        <View style={appStyle.footer}>
          <Text>Hello I'm Footer Filter bloc!</Text>
        </View>
    </SafeAreaProvider>
  );
}
