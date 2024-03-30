import AsyncStorage from "@react-native-async-storage/async-storage";
const TODO_LIST = [
  { id: 1, title: "Sortir le chien", isCompleted: true },
  { id: 2, title: "Aller chez le garagiste", isCompleted: false },
  { id: 3, title: "Faire les courses", isCompleted: true },
  { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
  { id: 5, title: "Sortir le chien", isCompleted: true },
  { id: 6, title: "Aller chez le garagiste", isCompleted: false },
  { id: 7, title: "Faire les courses", isCompleted: true },
  { id: 8, title: "Appeler le vétérinaire", isCompleted: true },
  { id: 9, title: "Apprendre React Native", isCompleted: true },
  { id: 10, title: "Apprendre Nest.js", isCompleted: true },
  { id: 11, title: "Apprendre GSAP", isCompleted: true },
  { id: 12, title: "Apprendre Three.js", isCompleted: true },
  { id: 13, title: "Apprendre Next.js14", isCompleted: true },
];
const TABS = [
  { title: "All", type: "ALL" },
  { title: "In Progress", type: "IN_PROGRESS" },
  { title: "Done", type: "DONE" },
];
const filterTodos = (state, filter) => {
  switch (filter) {
    case "ALL":
      return state;
    case "DONE":
      return state.filter((t) => t.isCompleted);
    case "IN_PROGRESS":
      return state.filter((t) => !t.isCompleted);
    default:
      return state;
  }
};
const saveTodoList = async (todos) => {
  const data = JSON.stringify(todos);
  try {
    await AsyncStorage.setItem("@todos", data);
    console.log("SAVE");
  } catch (error) {
    alert("Error on saving data " + error.message);
  }
};
const getSavingTodoList = async () => {
  try {
    console.log("LOAD");
    const data = await AsyncStorage.getItem("@todos");
    if (data !== null) {
      return JSON.parse(data);
    }
    return null
  } catch (error) {
    alert("Error on getting data" + error.message);
  }
};
const todosReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
    return action.payload;
    case "ADD_TODO":
      return [
        { id: Date.now(), title: action.payload, isCompleted: false },
        ...state,
      ];
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.payload);
    case "TOGGLE_TODO": {
      const todoIndex = state.findIndex((t) => t.id === action.payload);
      const newState = [...state];
      newState[todoIndex].isCompleted = !newState[todoIndex].isCompleted;
      return newState;
    }
    case "FILTER_TODO":
      return filterTodos(state, action.payload);
    default:
      return state;
  }
};
export {
  TODO_LIST,
  TABS,
  todosReducer,
  filterTodos,
  saveTodoList,
  getSavingTodoList,
};
