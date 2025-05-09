import React from 'react';
import { View, StyleSheet } from "react-native";
import CartItemControls from './CartItemControls';
import CartItemInfo from './CartItemInfo';

type CartItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: any;
  };
};

export default function CartItem({ item }: CartItemProps) {
  return (
    <View style={styles.container}>
      <CartItemInfo item={item} />
      <CartItemControls item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});

