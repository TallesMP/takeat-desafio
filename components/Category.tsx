import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import Product from "./Product";
import { LinearGradient } from 'expo-linear-gradient';


type CategoryProps = {
  name: string;
  banner: string;
  preparation_time: number;
  active_days: string;
  start_time: Date;
  end_time: Date;
  products: any[];
};

function formatTime(date: Date) {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export default function Category({
  name,
  banner,
  preparation_time,
  active_days,
  start_time,
  end_time,
  products,
}: CategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  function getActiveDays() {
    if (active_days === "ttttttt") {
      return [];
    }
    return active_days
      .split("")
      .map((char, index) => (char.toLowerCase() === "t" ? weekDays[index] : null))
      .filter(Boolean);
  }

  const activeDays = getActiveDays();

  const formattedStartTime = formatTime(start_time);
  const formattedEndTime = formatTime(end_time);

  const is24h = (formattedStartTime === "00:00" && formattedEndTime === "23:59");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Image
          source={banner ? { uri: banner } : require("@/assets/images/default_category_image.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.titleContainer}
        >
          <View style={styles.titleLeft}>
            <Text adjustsFontSizeToFit style={styles.title}>{name}</Text>
            {activeDays.length > 0 && (
              <Text style={styles.days}>{activeDays.join(" ")}</Text>
            )}
            {!is24h && (
              <Text style={styles.time}>Das {formattedStartTime} às {formattedEndTime}</Text>
            )}
          </View>
          <Text style={styles.prepTime}>{preparation_time} min</Text>
        </LinearGradient>
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
    backgroundColor: "#979797",
    width: "100%",
  },
  titleContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderRadius: 30,
  },
  titleLeft: {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    flexShrink: 1
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "roboto",
    flexShrink: 1
  },
  days: {
    color: "#FFA814",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "bold",
  },
  time: {
    color: "#FFA814",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "bold",
  },
  prepTime: {
    color: "#FFA814",
    fontSize: 16,
    fontWeight: "bold",
  },
  productsContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
});
