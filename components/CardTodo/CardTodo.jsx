import { Text, TouchableHighlight } from "react-native";

const CardTodo = ({ todo }) => {
  return <TouchableHighlight>
    <Text>{todo.title}</Text>
  </TouchableHighlight>;
};

export default CardTodo;
