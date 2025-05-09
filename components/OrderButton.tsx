import { useCart } from "@/contexts/CartContext";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function OrderButton() {
  const { total } = useCart();

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Fazer pedido R$ {total.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF2C3A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderButton;

