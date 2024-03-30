import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { TABS, TODO_LIST } from "./data/constants";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState(TODO_LIST);
  const inProgressTodo = todos.filter(t=>!t.isCompleted);
  const doneTodo = todos.filter(t=>t.isCompleted);
  const todoState = [todos,inProgressTodo,doneTodo]
  const [activeIndex,setActiveIndex] = useState(0);
  const handleTabChange = (newIndex)=>{
    setActiveIndex(newIndex);
  }
  const handleCompleted = (todo) => {
    const todoIndex = todos.findIndex(t=>t.id===todo.id);
    const ourTodos = [...todos];
    ourTodos[todoIndex].isCompleted =!ourTodos[todoIndex].isCompleted;
    setTodos(ourTodos);
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
        {TABS.map((tab,index)=>(
        <TouchableOpacity onPress={()=>handleTabChange(index)} key={index}><Text style={[appStyle.footer.text,index===activeIndex && {color:'#606fda'}]}>{tab} ({todoState[index].length})</Text></TouchableOpacity>
        ))}
      </View>
    </SafeAreaProvider>
  );
}
