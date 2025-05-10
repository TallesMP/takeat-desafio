import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CartButton() {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => { router.push('/cart') }} style={styles.button}>
      <Image source={require('@/assets/images/takeat_icon.png')} style={styles.icon} />
      <Text style={styles.text}>Carrinho</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "67%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF2C3A",
    padding: 10,
    borderRadius: 18,
    alignSelf: 'center',
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
    fontFamily: "poppins",
  },
});

