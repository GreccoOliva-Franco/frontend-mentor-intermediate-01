"use client";

import { useCallback, useReducer } from "react";
import { Item } from "./interfaces";

enum Action {
  ADD = "add",
  REMOVE = "remove",
}

export function useShoppingCart() {
  const initialState = {
    items: [
      {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        image: { src: "/image-product-1-thumbnail.jpg", alt: "alt" },
        quantity: 2,
        unitPrice: 125,
      },
    ],
  } satisfies {
    items: Item[];
  };
  const [state, dispatch] = useReducer((prevState, { action, context }) => {
    switch (action) {
      case "add": {
        return { ...prevState, items: [...prevState.items, context.data] };
      }
      case "remove": {
        const { id } = context.data as { id: number };

        return {
          ...prevState,
          items: prevState.items.filter((item) => item.id !== id),
        };
      }
      default: {
        throw new Error("Invalid action");
      }
    }
  }, initialState);

  const addItem = useCallback(
    (item: Item) => dispatch({ action: Action.ADD, context: { item } }),
    []
  );
  const removeItem = useCallback((id: number) => {
    dispatch({ action: Action.REMOVE, data: { id } });
  }, []);

  return {
    ...state,
    actions: { addItem, removeItem },
  };
}
