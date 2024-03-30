import { Image, Text, TouchableHighlight, View } from "react-native";
import check from "../../assets/check.png";
import { s } from "./cardTodo.style";
const CardTodo = ({ todo }) => {
  return (
    <TouchableHighlight style={s.app}>
      <>
        <Text>{todo.title}</Text>
        <View style={s.imgContainer}>
          {todo.isCompleted && <Image source={check} style={s.img} />}
        </View>
      </>
    </TouchableHighlight>
  );
};

export default CardTodo;
