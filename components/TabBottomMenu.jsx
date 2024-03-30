import { Text, TouchableOpacity } from "react-native";
import { TABS } from "../data/constants";
import { appStyle } from "../styles/app.style";

const TabBottomMenu = ({ activeIndex, handlePress,todos }) => {

  const allTodo = todos.length;
  const inProgressTodoCount = todos.filter((t) => !t.isCompleted).length;
  const doneTodoCount = todos.filter((t) => t.isCompleted).length;
  const todoState = [allTodo, inProgressTodoCount, doneTodoCount];
  const activeStyle = { color: "#606fda" };
  return (
    <>
      {TABS.map((tab, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index, tab.type)}
          key={index}
        >
          <Text
            style={[appStyle.footer.text, index === activeIndex && activeStyle]}
          >
            {tab.title} ({todoState[index]})
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default TabBottomMenu;
