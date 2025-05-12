import { Slot } from 'expo-router';
import { CartProvider } from '@/contexts/CartContext';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { LogBox, Appearance } from 'react-native';

export default function Layout() {
  LogBox.ignoreAllLogs();
  const [fontsLoaded] = useFonts({
    poppins: Poppins_400Regular,
    roboto: Roboto_400Regular,
  });

  Appearance.setColorScheme('light')

  if (!fontsLoaded) {
    console.log("Fontes não carregadas")
  }

  return (
    <CartProvider>
      <Slot />
    </CartProvider>
  );
}
