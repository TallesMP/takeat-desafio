import { useCart } from "@/contexts/CartContext";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function ClearCartButton() {
  const { clearCart } = useCart();

  return (
    <TouchableOpacity style={styles.button}
      onPress={() => clearCart()}
    >
      <Text style={styles.buttonText}>Limpar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#FF2C3A',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FF2C3A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClearCartButton;

