import Image from "next/image";
import CheckOut from "@/components/check-out";
import { useShoppingCart } from "./hooks";
import { Item } from "./interfaces";
import { Price } from "@/lib/prices";

function EmptyCart() {
  return <p className="text-center my-24">Your cart is empty.</p>;
}

function CartItem(item: Item) {
  const { actions } = useShoppingCart();

  const itemTotalDetailed = `$${Price.toFinancial(item.unitPrice)} x ${
    item.quantity
  } `;
  const total = item.quantity * item.unitPrice;
  const itemTotal = "$" + Price.toFinancial(total);

  function deleteItem() {
    actions.deleteProduct(item.id);
  }

  return (
    <div className="flex flex-grow justify-center gap-4">
      <Image
        src={item.image.thumbnail}
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
      <button onClick={deleteItem} className="hover:cursor-pointer">
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
  const { products } = useShoppingCart();

  return (
    <div className="mb-3 flex flex-col justify-center items-center gap-8 px-6 py-4">
      {!products.length ? <EmptyCart /> : <CartList items={products} />}
      {!!products.length && <CheckOut />}
    </div>
  );
}
