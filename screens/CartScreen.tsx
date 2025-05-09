import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCart } from "@/contexts/CartContext";
import CartItem from "@/components/cartItem/CartItem";
import TableIndicator from "@/components/TableIndicator";
import GoBackButton from "@/components/GoBackButton";
import OrderButton from "@/components/OrderButton";
import ClearCartButton from "@/components/ClearCartButton";

export default function CartScreen() {
  const { itemList } = useCart();

  return (
    <>    <View style={styles.container}>
      <View style={styles.header}>
        <TableIndicator table={1} />
        <GoBackButton
          text="Continuar comprando"
          page="/"
        />
      </View>
      <Text style={styles.title}>Itens</Text>
      <FlatList
        data={itemList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />

    </View>
      <View style={styles.footer}>
        <OrderButton />
        <ClearCartButton />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#EDEDED',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly'
  }
});

