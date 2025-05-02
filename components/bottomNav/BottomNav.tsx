import { StyleSheet, View } from "react-native";
import CartButton from "./CartButton";
import BillButton from "./BillButton";

export default function BottomNav() {
  return (
    <View style={styles.bar}>
      <CartButton />
      <BillButton />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderTopColor: "#ccc",
  },
});

