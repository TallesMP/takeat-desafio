import BottomNav from "@/components/bottomNav/BottomNav";
import Category from "@/components/Category";
import GoBackButton from "@/components/GoBackButton";
import TableIndicator from "@/components/TableIndicator";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  const restaurantId = 2
  const restaurantName = "Seu restaurante"
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get(`/public/restaurants/menu/${restaurantId}`)
        setCategories(response.data)
      }
      catch (error) {
        alert("Erro ao buscar dados do cardapio");
        console.error(error);
      }
    };

    fetchMenu();
  }, [restaurantId])

  return (
    <SafeAreaView style={styles.body} edges={['top', "bottom"]}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>{restaurantName}</Text>
          <GoBackButton text="Voltar" page="" />
        </View>
        <TableIndicator table={1} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {categories.length > 0 ? (
          categories.map((category: any) => (
            <Category
              key={category.id}
              name={category.name}
              banner={category.image?.url}
              products={category.products}
            />
          ))
        ) : (
          <Text>Carregando...</Text>
        )}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingInline: 22,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  body: {
    flex: 1,
    flexGrow: 1,
  }
})
