"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import ShoppingCartList from "./item-list";
import { useShoppingCart } from "./hooks";

export default function ShoppingCart() {
  const { products } = useShoppingCart();

  const count = products.reduce(
    (acc, curr) => (curr.quantity ? curr.quantity + acc : acc),
    0
  );

  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative">
          <Image
            src={"/icon-cart.svg"}
            alt="Shopping cart"
            width={400}
            height={400}
            className="size-6 hover:cursor-pointer"
          />
          {!!count && (
            <Badge className="absolute -top-1 -right-1 size-3 bg-badge-bg">
              {count}
            </Badge>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="p-6">
          <DialogTitle className="text-start">Cart</DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>

        <Separator />

        <ShoppingCartList />
      </DialogContent>
    </Dialog>
  );
}
