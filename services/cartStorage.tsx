import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem } from '@/contexts/CartContext';

export async function loadCart(): Promise<CartItem[]> {
  const storedCart = await AsyncStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
}

export async function saveCart(cart: CartItem[]): Promise<void> {
  await AsyncStorage.setItem('cart', JSON.stringify(cart));
}

export async function clearCartStorage(): Promise<void> {
  await AsyncStorage.removeItem('cart');
}
