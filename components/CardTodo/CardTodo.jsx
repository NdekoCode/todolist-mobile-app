import { Image, Text, TouchableOpacity, View } from "react-native";
import check from "../../assets/check.png";
import { s } from "./cardTodo.style";
const CardTodo = ({ todo }) => {
  return (
    <TouchableOpacity style={s.app}>
      <>
        <Text>{todo.title}</Text>
        <View style={s.imgContainer}>
          {todo.isCompleted && <Image source={check} style={s.img} />}
        </View>
      </>
    </TouchableOpacity>
  );
};

export default CardTodo;
