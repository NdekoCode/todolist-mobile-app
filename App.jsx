import { Alert, FlatList, ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Dialog from "react-native-dialog";

import { appStyle } from "./styles/app.style";
import Header from "./components/Header";
import bg from "./assets/bg-white.png";
import CardTodo from "./components/CardTodo/CardTodo";
import { filterTodos, getSavingTodoList, saveTodoList, todosReducer } from "./data/constants";
import { useEffect, useReducer, useState } from "react";
import TabBottomMenu from "./components/TabBottomMenu";
import AddTodoButton from "./components/AddTodoButton";
let isFirstRender = true;
export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [filter, setFilter] = useState("ALL");
  const [newTodo, setNewTodo] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const todosFiltered = filterTodos(todos, filter);

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
      { cancelable: true }
    );
  };

  const handleAdd = () => {
    setIsVisible(true);
  };

  const addTodo = () => {
    if (newTodo.trim().length > 1) {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
    setIsVisible(false);
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
  useEffect(()=>{
    (async()=>{
      const data = await getSavingTodoList()
      if(data!==null){
        dispatch({type:'INIT',payload:data})
      }
    })()
  },[])
  useEffect(() => {
    if (!isFirstRender) {
      (async () => {
        await saveTodoList(todos);
      })();
    } else {
      isFirstRender = false;
    }
  }, [todos]);

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
            <AddTodoButton handleAdd={handleAdd} />
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
      <Dialog.Container
        visible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      >
        <Dialog.Title>Add new Todo</Dialog.Title>
        <Dialog.Description>Add a new Task to do</Dialog.Description>
        <Dialog.Input
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
          placeholder="Add new todo"
        />
        <View>
          <Dialog.Button label="Add Todo" onPress={addTodo} />
        </View>
      </Dialog.Container>
    </SafeAreaProvider>
  );
}
