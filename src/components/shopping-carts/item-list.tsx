import Image from "next/image";
import CheckOut from "@/components/check-out";
import { useShoppingCart } from "./hooks";
import { Item } from "./interfaces";

function EmptyCart() {
  return <p className="text-center my-24">Your cart is empty.</p>;
}

function CartItem(item: Item) {
  const itemTotalDetailed = `$${item.unitPrice.toFixed(2)} x ${item.quantity} `;
  const itemTotal = "$" + (item.unitPrice * item.quantity).toFixed(2);

  return (
    <div className="flex flex-grow justify-center gap-4">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        height={400}
        width={400}
        className="size-12 rounded-lg self-center"
      />
      <div className="flex flex-col justify-center w-full">
        <h3 className="text-Gray-blue-darker">{item.name}</h3>
        <p className="text-Gray-blue-darker leading-6">
          {itemTotalDetailed}
          <strong className="text-black font-bold">{itemTotal}</strong>
        </p>
      </div>
      <button className="hover:cursor-pointer">
        <Image
          src={"/icon-delete.svg"}
          alt="delete cart item"
          height={400}
          width={400}
          className="w-6.25 h-5"
        />
      </button>
    </div>
  );
}

function CartList({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 w-full">
      {items.map((item, index) => (
        <CartItem key={index} {...item} />
      ))}
    </div>
  );
}

export default function ShoppingCartList() {
  const { items } = useShoppingCart();

  return (
    <div className="mb-3 flex flex-col justify-center items-center gap-8 px-6 py-4">
      {!items.length ? <EmptyCart /> : <CartList items={items} />}
      {!!items.length && <CheckOut />}
    </div>
  );
}
