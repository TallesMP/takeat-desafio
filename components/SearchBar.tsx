import { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ categories, onFilter }: { categories: any[], onFilter: any }) {
  const [searchText, setSearchText] = useState('');

  function clearSearch() {
    setSearchText('')
  }
  useEffect(() => {
    if (!searchText) {
      onFilter(categories)
      return
    }


    const filtered = categories
      .map(category => {
        const filteredProducts = category.products.filter((product: any) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        );

        return {
          ...category,
          products: filteredProducts
        };
      }).filter(category => category.products.length > 0);

    onFilter(filtered)

  }, [searchText, categories, onFilter])

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#999" style={styles.iconLeft} />

      <TextInput
        placeholder="Buscar produto..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
        placeholderTextColor="#999"
      />

      {searchText.length > 0 && (
        <TouchableOpacity onPress={clearSearch}>
          <Ionicons name="close" size={20} color="#999" style={styles.iconRight} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: "#D9D9D9",
    borderWidth: 0.5,
    paddingHorizontal: 10,
    height: 44,
    marginTop: 10
  },
  iconLeft: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  iconRight: {
    marginLeft: 8,
  },
});
