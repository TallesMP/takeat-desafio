import { View, Image, Text, StyleSheet } from "react-native";

type CartItemInfoProps = {
  item: {
    id: number;
    name: string;
    image?: any;
  };
};

export default function CartItemInfo({ item }: CartItemInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image?.url }} style={styles.image} />
      </View>
      <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  imageContainer: {
    width: 55,
    height: 55,
    backgroundColor: "#D9D9D9",
    marginRight: 6
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 5,
    marginRight: 10,
  },
  name: {
    flexShrink: 1,
    fontSize: 11,
    fontWeight: "bold",
  },
});

