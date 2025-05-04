import { useCart } from "@/contexts/CartContext";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

type ProductProps = {
  data: {
    id: number;
    name: string;
    image: any;
    price: string;
  };
};

export default function Product({ data }: ProductProps) {
  const { addToCart } = useCart()
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        addToCart({ id: data.id, name: data.name, price: Number(data.price) })
        Alert.alert("Adicionado ao carrinho", `Você adicionou "${data.name.trim()}" ao carrinho`);

      }}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image?.url }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {data.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "31%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: "2%",
    shadowOffset: { width: 0.5, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    width: "100%",
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
  },
  infoContainer: {
    minHeight: 75,
    width: "100%",
    flex: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  priceContainer: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "poppins",
  },
  price: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
    fontFamily: "poppins",
  },
});


