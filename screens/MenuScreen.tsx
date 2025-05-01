import Category from "@/components/Category";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native"

export default function MenuScreen() {
  const restaurantId = 2
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
  return (<></>)
}

