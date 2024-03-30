import { FlatList, ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { TODO_LIST } from "./data/constants";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState(TODO_LIST);

  const handleCompleted = (todo) => {
    const newTodos = todos.map((t, index) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
        return t;
      }
      return t;
    });
    setTodos(newTodos);
  };
  return (
    <SafeAreaProvider>
      <ImageBackground source={bg} style={appStyle.app}>
        <SafeAreaView style={appStyle.container}>
          <Header />
          <View style={appStyle.body}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CardTodo todo={item} handleCompleted={handleCompleted} />
              )}
            ></FlatList>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={appStyle.footer}>
        <Text>Hello I'm Footer Filter bloc!</Text>
      </View>
    </SafeAreaProvider>
  );
}
