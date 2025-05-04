import { createContext, useContext, useState, useMemo, useEffect, ReactNode } from 'react';
import { loadCart, saveCart } from '@/services/cartStorage';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  itemList: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [itemList, setItemList] = useState<CartItem[]>([]);

  useEffect(() => { loadCartData(); }, []);
  useEffect(() => { saveCart(itemList); }, [itemList]);

  async function loadCartData() {
    const storedItemList = await loadCart();
    setItemList(storedItemList);
  }

  function addToCart(item: Omit<CartItem, 'quantity'>) {
    setItemList(prevItemList => {
      if (itemExists(prevItemList, item.id)) return increaseQuantity(prevItemList, item.id);
      return addNewItem(prevItemList, item);
    });
  }

  function removeFromCart(id: number) {
    setItemList(prevItemList => filterCart(decreaseQuantity(prevItemList, id)));
  }

  function clearCart() {
    setItemList([]);
  }

  function itemExists(itemList: CartItem[], itemId: number): boolean {
    return itemList.some(cartItem => cartItem.id === itemId);
  }

  function increaseQuantity(itemList: CartItem[], itemId: number): CartItem[] {
    return itemList.map(cartItem => {
      if (cartItem.id !== itemId) return cartItem;
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    });
  }

  function decreaseQuantity(itemList: CartItem[], itemId: number): CartItem[] {
    return itemList.map(cartItem => {
      if (cartItem.id !== itemId) return cartItem;
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    });
  }

  function filterCart(itemList: CartItem[]): CartItem[] {
    return itemList.filter(cartItem => cartItem.quantity > 0);
  }

  function addNewItem(itemList: CartItem[], item: Omit<CartItem, 'quantity'>): CartItem[] {
    return [...itemList, { ...item, quantity: 1 }];
  }

  const { itemCount, total } = useMemo(() => calculateCartMetrics(itemList), [itemList]);

  function calculateCartMetrics(itemList: CartItem[]) {
    const itemCount = itemList.reduce((count, item) => count + item.quantity, 0);
    const total = itemList.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { itemCount, total };
  }

  return (
    <CartContext.Provider value={{ itemList, addToCart, removeFromCart, clearCart, itemCount, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
}

