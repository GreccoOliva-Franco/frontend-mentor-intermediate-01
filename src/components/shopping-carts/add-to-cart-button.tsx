import Image from "next/image";
import { useState } from "react";
import { ProductDetials as Product } from "@/components/product";
import { useShoppingCart } from "./hooks";
import { cn } from "@/lib/styles";

function QuantitySetter({
  quantity,
  increment,
  decrement,
  className,
}: {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex justify-between items-center p-4 bg-Gray-blue-lighter rounded-lg",
        className
      )}
    >
      <button onClick={decrement}>
        <Image
          src={"/icon-minus.svg"}
          alt=""
          height={400}
          width={400}
          className="size-auto"
        />
      </button>
      <span className="font-bold">{quantity}</span>
      <button onClick={increment}>
        <Image
          src={"/icon-plus.svg"}
          alt=""
          height={400}
          width={400}
          className="size-auto"
        />
      </button>
    </div>
  );
}

function AddButton({
  onClick,
  disabled,
  className,
}: {
  className: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex justify-center items-center gap-4 p-4 bg-button-bg drop-shadow-xl drop-shadow-button-shadow/50 rounded-lg text-button-text font-bold",
        "has-[disabled=true]:bg-Gray-blue",
        className
      )}
    >
      <Image
        src={"/icon-cart.svg"}
        alt="Add-product-to-cart button"
        height={50}
        width={50}
        className="size-auto stroke-black"
      />
      Add to cart
    </button>
  );
}

export default function AddToCart({
  product,
  className,
}: {
  product: Product;
  className: string;
}) {
  const { actions } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity(quantity + 1);
  }
  function decrement() {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  }

  function addItem() {
    actions.addProduct(product, quantity);
  }

  return (
    <div className={cn("grid grid-cols-1 gap-4", "sm:grid-cols-3", className)}>
      <QuantitySetter
        {...{ increment, decrement, quantity }}
        className="col-span-1"
      />

      <AddButton
        onClick={addItem}
        disabled={quantity === 0}
        className="col-span-1 sm:col-span-2"
      />
    </div>
  );
}
