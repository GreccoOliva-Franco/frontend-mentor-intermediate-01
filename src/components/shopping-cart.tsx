"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import ShoppingCartList from "./shopping-carts/item-list";
import { Badge } from "./ui/badge";
import { useShoppingCart } from "./shopping-carts/hooks";

export default function ShoppingCart() {
  const { items } = useShoppingCart();

  const count = items.reduce(
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
