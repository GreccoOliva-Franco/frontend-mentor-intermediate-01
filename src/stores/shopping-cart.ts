import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { ProductDetials } from "@/components/product";

interface ShoppingCartProduct extends Pick<ProductDetials, "id"> {
  name: ProductDetials["title"];
  image: Pick<ProductDetials["images"][0], "thumbnail" | "alt">;
  quantity: number;
  unitPrice: number;
}

type ShoppingCartState = {
  products: ShoppingCartProduct[];
};

type ShoppingCartActions = {
  addProduct: (
    product: ProductDetials,
    quantity: ShoppingCartProduct["quantity"]
  ) => void;
  deleteProduct: (id: ShoppingCartProduct["id"]) => void;
};

export type ShoppingCartStore = ShoppingCartState & ShoppingCartActions;

const initialState: ShoppingCartState = {
  products: [],
};

function getItemFromProduct(
  product: ProductDetials,
  quantity: number
): ShoppingCartProduct {
  const { id, title, images, prices } = product;

  const { alt, thumbnail } = images[0];

  return {
    id,
    name: title,
    image: { thumbnail, alt },
    unitPrice: prices.final,
    quantity,
  };
}

export function createShoppingCartStore() {
  return createStore<ShoppingCartStore>()(
    persist(
      (set, get) => ({
        ...initialState,
        addProduct: (product, quantity) => {
          const productAlreadyExists = get().products.find(
            (prod) => prod.id === product.id
          );
          if (productAlreadyExists) {
            set(() => ({
              products: get().products.map((prod) =>
                prod.id !== product.id
                  ? prod
                  : { ...prod, quantity: prod.quantity + quantity }
              ),
            }));
          } else {
            set(() => ({
              products: [
                ...get().products,
                getItemFromProduct(product, quantity),
              ],
            }));
          }
        },
        deleteProduct: (id) =>
          set(() => ({
            products: [...get().products.filter((item) => item.id !== id)],
          })),
      }),
      {
        name: "shopping-cart-store",
      }
    )
  );
}
