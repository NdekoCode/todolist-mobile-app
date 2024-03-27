import { StyleSheet } from "react-native";

const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:'#f9f9f9'
  },
  header: {
    width: "100%",
    backgroundColor: "red",
    flex: 1,
  },
  body: {
    backgroundColor: "green",
    width: "100%",
    flex: 5,
  },
  footer: {
    backgroundColor: "yellow",
    height:70
  },
});
export { appStyle };
