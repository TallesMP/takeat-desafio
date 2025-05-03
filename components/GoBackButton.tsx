import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GoBackButton({ text, page }: { text: string, page: string }) {
  return (
    // Implementar nagvegação depois
    <TouchableOpacity onPress={() => { }} style={styles.row}>
      <Image source={require("@/assets/images/go_back_arrow.png")} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 17,
    height: 14,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF2B3A",
    fontFamily: "poppins"
  },
});

