import { Image, StyleSheet, Text, View } from "react-native";
import { appStyle } from "../styles/app.style";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../assets/logo-text.png")} />
      <Text style={styles.subtitle}>Tu as probablement un truc à faire.</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    ...appStyle.header,
  },
  logo: {
    width: 200,
    height: 80,
    objectFit: "contain",
  },
  subtitle: {
    fontSize:18,
    color: "#bababa",
  },
});
