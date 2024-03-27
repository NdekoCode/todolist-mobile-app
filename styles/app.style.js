import { StyleSheet } from "react-native";

const appStyle = StyleSheet.create({
  container: {
    flex:1
  },
  app:{

    flex: 1,
    backgroundColor:'#f9f9f9',
    paddingHorizontal:20
  },
  header: {
    width: "100%",
    flex: 1,
  },
  body: {
    width: "100%",
    flex: 5,
  },
  footer: {
    paddingHorizontal:20,
    backgroundColor:'#fff',
    alignSelf:'stretch',
    height:70
  },
});
export { appStyle };
