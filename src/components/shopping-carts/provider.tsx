"use client";

import { createShoppingCartStore } from "@/stores/shopping-cart";
import { createContext, ReactNode, useRef } from "react";

type ShoppingCartStoreApi = ReturnType<typeof createShoppingCartStore>;

export const ShoppingCartContext = createContext<
  ShoppingCartStoreApi | undefined
>(undefined);

export default function ShoppingCartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const storeRef = useRef<ShoppingCartStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createShoppingCartStore();
  }

  return (
    <ShoppingCartContext.Provider value={storeRef.current}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
