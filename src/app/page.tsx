import Product from "@/components/product";
import { cn } from "@/lib/styles";
import product from "@/app/data.json";

export default async function RootHome() {
  return (
    <main
      className={cn("flex flex-col flex-grow", "md:justify-center")}
    >
      <section
        id="product"
        className={cn("grid grid-cols-1 h-full", "md:grid-cols-2")}
      >
        <Product product={product} />
      </section>
    </main>
  );
}
