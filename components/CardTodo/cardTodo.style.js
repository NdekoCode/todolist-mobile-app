import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  app: {
    flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: "#adadad",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.25)",
    marginBottom:10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10, // For IOS
  },
  text: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  iconContainer:{
    flexDirection:'row',
    columnGap:10
  },
  deleteImg:{
    width: 24,
    aspectRatio: 1,
  
  },
  imgContainer: {
    width: 24,
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: "#adadad",
    boxShadow: "0px 0px 5px 0 rgba(0,0,0,0.05)",
    borderRadius: 99,
  },
  img: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
  },
});
export { s };
