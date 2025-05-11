import Loader from "@/components/ui/loader";
import Product from "@/components/product";
import { cn } from "@/lib/styles";
import { Suspense } from "react";
import product from "@/app/data.json";

export default async function RootHome() {
  return (
    <main className="h-full">
      <section
        id="product"
        className={cn("grid grid-cols-1", "sm:grid-cols-2")}
      >
        <Suspense fallback={<Loader />}>
          <Product product={product} />
        </Suspense>
      </section>
    </main>
  );
}
