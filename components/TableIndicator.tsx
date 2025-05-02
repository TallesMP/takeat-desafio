import { Image, Text, View, StyleSheet } from "react-native";

export default function TableIndicator({ table }: { table: number }) {
  return (
    <View style={styles.row}>
      <Image source={require("@/assets/images/indicator.svg")} style={styles.icon} />
      <Text style={styles.text}>mesa {table}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 23,
    height: 18,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF2B3A",
    fontFamily: "poppins"
  },
});

