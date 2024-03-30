import { Alert, FlatList, ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { filterTodos, TODO_LIST, todosReducer } from "./data/constants";
import { useReducer, useState } from "react";
import TabBottomMenu from "./components/TabBottomMenu";
import AddTodoButton from "./components/AddTodoButton";
export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, TODO_LIST);
  const [filter, setFilter] = useState("ALL");
  const todosFiltered = filterTodos(todos, filter);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDelete = (id) => {
    Alert.alert(
      "Delete this todo",
      "Pay attention you're in the process to delete this todo",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Confirm",
          style: "destructive",
          onPress: () => deleteTodo(id),
        },
      ],
      {cancelable:true}
    );
  };
  const handleAdd = ()=>{
    Alert.prompt("Add Todo", "Add a new todo",(title)=>addTodo(title))
  }
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
                <View>
                  <CardTodo
                    todo={item}
                    handleCompleted={toggleTodo}
                    handleDelete={handleDelete}
                  />
                </View>
              )}
            ></FlatList>
            <AddTodoButton handleAdd={handleAdd}/>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={appStyle.footer}>
        <TabBottomMenu
          activeIndex={activeIndex}
          handlePress={handleFilter}
          todos={todos}
        />
      </View>
    </SafeAreaProvider>
  );
}
