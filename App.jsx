import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { TODO_LIST } from "./data/constants";
import { useState } from "react";
export default function App() {
  const [todos,setTodos] = useState(TODO_LIST)
  return (
    <SafeAreaProvider>
      <ImageBackground source={bg} style={appStyle.app}>
        <SafeAreaView style={appStyle.container}>
          <Header />
          <View style={appStyle.body}>
            {todos.map((todo,index)=>(
            <CardTodo todo={todo} key={index}/>))}
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={appStyle.footer}>
        <Text>Hello I'm Footer Filter bloc!</Text>
      </View>
    </SafeAreaProvider>
  );
}
