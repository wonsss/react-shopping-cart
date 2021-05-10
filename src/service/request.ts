import APIClient from '../API';
import { ItemInCart, Product } from '../types';

export const requestProductList = (): Promise<Product[]> => APIClient.get('/productList');

export const requestShoppingCartItemList = (): Promise<ItemInCart[]> => APIClient.get('/cart');

export const requestAddShoppingCartItem = (item: ItemInCart) =>
  APIClient.post<ItemInCart>('/cart', item);

export const requestChangeShoppingCartItem = (item: ItemInCart) =>
  APIClient.put<ItemInCart>(`/cart/${item.id}`, item);

export const requestDeleteShoppingCartItem = (itemId: string) =>
  APIClient.delete(`/cart/${itemId}`);

export const requestChangeShoppingCartItemChecked = (item: ItemInCart) =>
  APIClient.put<ItemInCart>(`/cart/${item.id}`, item);

export const requestChangeAllShoppingCartItemChecked = (items: ItemInCart[], checked: boolean) => {
  Promise.all(
    items.map((item) => APIClient.put<ItemInCart>(`/cart/${item.id}`, { ...item, checked }))
  );
};
