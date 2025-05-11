import { ReactNode } from "react";

import ShoppingCartProvider from "@/components/shopping-carts/provider";

export default function Providers({ children }: { children: ReactNode }) {
  return <ShoppingCartProvider>{children}</ShoppingCartProvider>;
}
