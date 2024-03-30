import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { TABS, TODO_LIST, todosReducer } from "./data/constants";
import { useReducer, useState } from "react";
export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, TODO_LIST,TODO_LIST);
  const inProgressTodo = todos.filter(t=>!t.isCompleted);
  const addTodo = (title)=>{
    dispatch({type:"ADD_TODO",payload:title});
  }
  const deleteTodo =(id)=>{
    dispatch({type:"DELETE_TODO",payload:id});
  }
  const toggleTodo =(id)=>{
    dispatch({type:"TOGGLE_TODO",payload:id});
  }
  const doneTodo = todos.filter(t=>t.isCompleted);
  const todoState = [todos,inProgressTodo,doneTodo]
  const [activeIndex,setActiveIndex] = useState(0);
  const handleTabChange = (newIndex)=>{
    setActiveIndex(newIndex);
  }
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
                <CardTodo todo={item} handleCompleted={toggleTodo} />
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
