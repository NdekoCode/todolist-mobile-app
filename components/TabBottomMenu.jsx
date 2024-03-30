import { Text, TouchableOpacity } from "react-native";
import { TABS } from "../data/constants";
import { appStyle } from "../styles/app.style";

const TabBottomMenu = ({ activeIndex, handlePress, todos }) => {
    // todos.reduce(functionAccumulator(acc,todo),initialValue); =>// functionAccumulator(laValeurCourrante,laProchaineValeur,indexDansLeTableau)
  const todoStatusCount = todos.reduce(
    (acc, todo) => {
    todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: todos.length, inProgress: 0, done: 0 }
  );
  const todoState = [todoStatusCount.all, todoStatusCount.inProgress, todoStatusCount.done];
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
