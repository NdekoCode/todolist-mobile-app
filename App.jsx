import { FlatList, ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { filterTodos, TODO_LIST, todosReducer } from "./data/constants";
import { useReducer, useState } from "react";
import TabBottomMenu from "./components/TabBottomMenu";
export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, TODO_LIST);
  const [filter, setFilter] = useState("ALL");
  const todosFiltered = filterTodos(todos, filter);
  const allTodo = todos.length;
  const inProgressTodoCount = todos.filter((t) => !t.isCompleted).length;
  const doneTodoCount = todos.filter((t) => t.isCompleted).length;
  const todoState = [allTodo, inProgressTodoCount, doneTodoCount];
  const [activeIndex, setActiveIndex] = useState(0);
  const addTodo = (title) => {
    dispatch({ type: "ADD_TODO", payload: title });
  };
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };
  const handleFilter = (index, filter = "ALL") => {
    setFilter(filter);
    setActiveIndex(index);
  };
  return (
    <SafeAreaProvider>
      <ImageBackground source={bg} style={appStyle.app}>
        <SafeAreaView style={appStyle.container}>
          <Header />
          <View style={appStyle.body}>
            <FlatList
              data={todosFiltered}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CardTodo todo={item} handleCompleted={toggleTodo} />
              )}
            ></FlatList>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={appStyle.footer}>
        <TabBottomMenu activeIndex={activeIndex} handlePress={handleFilter} todoState={todoState} />
      </View>
    </SafeAreaProvider>
  );
}
