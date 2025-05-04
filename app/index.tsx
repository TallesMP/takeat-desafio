import { CartProvider } from "@/contexts/CartContext";
import MenuScreen from "@/screens/MenuScreen";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
export default function Index() {
  const [fontsLoaded] = useFonts({
    poppins: Poppins_400Regular,
    roboto: Roboto_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CartProvider>
      <MenuScreen />
    </CartProvider>
  );
}
