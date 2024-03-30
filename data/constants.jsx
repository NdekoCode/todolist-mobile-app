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
const TABS = ["All", "In Progress", "Done"];
const filterTodos = (state, filter) => {
  switch (filter) {
    case "DONE":
      return state.filter((t) => t.isCompleted);
    case "IN_PROGRESS":
      return state.filter((t) => !t.isCompleted);
    default:
      return state;
  }
};
const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), title: action.payload, isCompleted: false },
      ];
    case "DELETE_TODO":
      return state.filter(todo.id !== action.payload);
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
export { TODO_LIST, TABS, todosReducer };
