import { Image, Text, TouchableOpacity, View } from "react-native";
import check from "../../assets/check.png";
import deleteImg from "../../assets/delete.png";
import { s } from "./cardTodo.style";
const CardTodo = ({ todo, handleCompleted,handleDelete }) => {
  const isCompltedStyle = todo.isCompleted && {
    textDecorationLine: "line-through",
  };
  return (
    <TouchableOpacity style={s.app} onLongPress={()=>handleDelete(todo.id)} onPress={() => handleCompleted(todo.id)}>
      <>
        <Text style={[s.text, isCompltedStyle]}>{todo.title}</Text>
        <View style={s.iconContainer}>
            <View style={s.imgContainer}>
              {todo.isCompleted && <Image source={check} style={s.img} />}
            </View>
            <TouchableOpacity onPress={()=>handleDelete(todo.id)} style={s.deleteImg}>
            <Image source={deleteImg} style={s.img} />
            </TouchableOpacity>
          </View>
      </>
    </TouchableOpacity>
  );
};

export default CardTodo;
