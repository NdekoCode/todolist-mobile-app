import { StyleSheet } from "react-native";

const appStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  app: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    flex: 1,
  },
  body: {
    width: "100%",
    rowGap: 10,
    flex: 5,
  },
  footer: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    text: {
      fontWeight: "bold",
      color: "#333",
    },
    height: 70,
  },
});
export { appStyle };
