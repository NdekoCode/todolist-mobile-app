import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddTodoButton = ({ handleAdd }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleAdd}>
      <Text style={styles.button.text}>+</Text>
    </TouchableOpacity>
  );
};

export default AddTodoButton;

const styles = StyleSheet.create({
  button: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 50,
    position: "absolute",
    right: -10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    backgroundColor: "#cedaff",
    text: {
      color: "#5464df",
      fontSize: 30,
      fontWeight: "500",
    },
  },
});
