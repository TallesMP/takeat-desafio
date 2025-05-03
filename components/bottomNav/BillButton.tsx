import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BillButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={require("@/assets/images/fork_knife.png")} style={styles.icon} />
      <Text style={styles.text}>Conta</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "22%", //80
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 18,
  },
  icon: {
    width: 18,
    height: 20,
  },
  text: {
    fontSize: 12,
    color: "#4D4D4C",
    fontFamily: "poppins"
  },
});

