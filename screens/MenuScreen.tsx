import BottomNav from "@/components/bottomNav/BottomNav";
import Category from "@/components/Category";
import GoBackButton from "@/components/GoBackButton";
import TableIndicator from "@/components/TableIndicator";
import SearchBar from "@/components/SearchBar";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  const restaurantId = 2;
  const restaurantName = "Seu restaurante";

  const [categories, setCategories] = useState<any[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get(`/public/restaurants/menu/${restaurantId}`);
        setCategories(response.data);
        setFilteredCategories(response.data);
      } catch (error) {
        alert("Erro ao buscar dados do cardápio");
        console.error(error);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  const handleFilter = (filtered: any[]) => {
    setFilteredCategories(filtered);
  };

  return (
    <SafeAreaView style={styles.body} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>{restaurantName}</Text>
          <GoBackButton text="Voltar" page="" />
        </View>
        <TableIndicator table={1} />
        <SearchBar categories={categories} onFilter={handleFilter} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category: any) => (
            <Category
              key={category.id}
              name={category.name}
              banner={category.image?.url}
              preparation_time={category.preparation_time}
              active_days={category.active_days}
              start_time={category.start_time}
              end_time={category.end_time}
              products={category.products}
            />
          ))
        ) : (
          <Text>Nenhum resultado encontrado.</Text>
        )}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingHorizontal: 22,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
});
