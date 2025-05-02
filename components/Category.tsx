import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import Product from "./Product";

type CategoryProps = {
  name: string
  banner: string
  products: any[]
};


export default function Category({ name, banner, products }: CategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Image source={{ uri: banner }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <FlatList
          numColumns={3}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Product data={item} />}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          contentContainerStyle={styles.productsContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "89%",
    marginBottom: 10,
  },
  image: {
    height: 70,
    borderRadius: 30,
  },
  titleContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "10%",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 30,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "roboto"
  },
  productsContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
});

