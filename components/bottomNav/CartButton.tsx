import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
export default function CartButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={require("@/assets/images/takeat_icon.svg")} style={styles.icon} />
      <Text style={styles.text}>Carrinho</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "67%", //240
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF2C3A",
    padding: 10,
    borderRadius: 18,
  },
  icon: {
    width: 22,
    height: 28,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "poppins"
  },
});

