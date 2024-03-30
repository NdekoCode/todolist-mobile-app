import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { TODO_LIST } from "./data/constants";
export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground source={bg} style={appStyle.app}>
        <SafeAreaView style={appStyle.container}>
          <Header />
          <View style={appStyle.body}>
            {TODO_LIST.map((todo,index)=>(
            <CardTodo todo={TODO_LIST[0]} todo={todo} key={index}/>))}
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={appStyle.footer}>
        <Text>Hello I'm Footer Filter bloc!</Text>
      </View>
    </SafeAreaProvider>
  );
}
