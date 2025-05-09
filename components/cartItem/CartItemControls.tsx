import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/contexts/CartContext";

type CartItemControlsProps = {
  item: {
    id: number;
    name: string,
    price: number;
    quantity: number;
  };
};

export default function CartItemControls({ item }: CartItemControlsProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editButton}>
        <Image source={require("@/assets/images/pencil_icon.png")} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => decreaseQuantity(item.id)}>
        <Ionicons name="remove-circle" size={16} color="#FF2C3A" />
      </TouchableOpacity>

      <Text style={styles.quantity}>{item.quantity}</Text>

      <TouchableOpacity style={styles.button} onPress={() => increaseQuantity(item.id)}>
        <Ionicons name="add-circle" size={16} color="#FF2C3A" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={() => removeFromCart(item.id)}>
        <Image source={require("@/assets/images/trash_icon.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButton: {
    marginRight: 10,
  },
  button: {
    padding: 5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  deleteButton: {
    padding: 8,
  },
  icon: {
    width: 12,
    height: 14
  }
});
