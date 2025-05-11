"use client";

import { useContext } from "react";
import { useStore } from "zustand";

import { ShoppingCartContext } from "./provider";

export function useShoppingCart() {
  const shoppingCart = useContext(ShoppingCartContext);

  if (!shoppingCart) {
    throw new Error("There is no context. Make sure the provider is added");
  }

  const { products, addProduct, deleteProduct } = useStore(
    shoppingCart,
    (store) => store
  );

  return {
    products,
    actions: { addProduct, deleteProduct },
  };
}
