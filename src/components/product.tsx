"use client";

import { cn } from "@/lib/styles";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import AddToCart from "./shopping-carts/add-to-cart-button";
import { Price } from "@/lib/prices";

export type ProductDetials = {
  id: number;
  title: string;
  description: string;
  images: ProductImage[];
  prices: ProductPrices;
};

type ProductPrices = {
  list: number;
  discount: number;
  final: number;
};

type ProductImage = {
  src: string;
  thumbnail: string;
  alt: string;
};

function ProductTitle({ children }: { children: string }) {
  return <h1 className="text-3xl font-bold md:text-4xl">{children}</h1>;
}

function ProductDescription({
  className,
  children,
}: {
  children: string;
  className: string;
}) {
  return <p className={cn("text-Gray-blue-darker", className)}>{children}</p>;
}

function ProductPrices({ prices }: Pick<ProductDetials, "prices">) {
  return (
    <div
      className={cn(
        "flex justify-between items-center",
        "sm:flex-col sm:items-start sm:gap-2"
      )}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl text-black font-bold">
          ${Price.toFinancial(prices.final)}
        </span>
        <span className="py-0.5 px-2 bg-black rounded-sm text-white font-bold">
          {Price.toFinancial(prices.discount).split(".")[0]}%
        </span>
      </div>
      <span className="text-Gray-blue-darker font-bold line-through">
        ${Price.toFinancial(prices.list)}
      </span>
    </div>
  );
}

interface Props {
  product: ProductDetials;
}

export default function Product({ product }: Props) {
  const maxIndex = product.images.length - 1;
  const [selectedIndex, setSelectedIndex] = useState(0);

  function showNextImage() {
    if (selectedIndex < maxIndex) {
      setSelectedIndex(selectedIndex + 1);
    }
  }
  function showPreviousImage() {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }

  return (
    <>
      <section
        id="product-images"
        className={cn(
          "col-span-1 relative flex flex-col justify-center items-center gap-6 overflow-hidden",
          "md:w-8/10 md:mx-auto"
        )}
      >
        <Image
          src={product.images[selectedIndex].src}
          alt={product.images[selectedIndex].alt}
          height={400}
          width={400}
          className={cn(
            "w-full aspect-[4/3] object-cover",
            "md:rounded-xl md:aspect-square"
          )}
        />
        <Button
          onClick={showPreviousImage}
          disabled={selectedIndex === 0}
          className={cn(
            "absolute top-45/100 left-4 p-2 aspect-square rounded-full bg-white flex justify-center items-center",
            "md:hidden"
          )}
        >
          <Image
            src={"/icon-previous.svg"}
            alt="Previous image"
            height={50}
            width={50}
            className="w-3 aspect-auto -ml-0.5"
          />
        </Button>
        <Button
          onClick={showNextImage}
          disabled={selectedIndex === maxIndex}
          className={cn(
            "absolute top-45/100 right-4 p-2 aspect-square rounded-full bg-white flex justify-center items-center",
            "md:hidden"
          )}
        >
          <Image
            src={"/icon-next.svg"}
            alt="Previous image"
            height={50}
            width={50}
            className="w-3 aspect-auto ml-0.5"
          />
        </Button>
        <div className="hidden md:flex md:w-full md:justify-between gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              disabled={index === selectedIndex}
              className="cursor-pointer"
            >
              <Image
                src={image.thumbnail}
                alt={image.alt}
                height={50}
                width={50}
                className={cn(
                  "flex-grow size-full aspect-square rounded-md",
                  "hover:bg-white hover:opacity-50",
                  selectedIndex === index && "bg-white opacity-50"
                )}
              />
            </button>
          ))}
        </div>
      </section>
      <section
        id="product-details"
        className={cn(
          "col-span-1 flex flex-col gap-4 p-8",
          "md:flex-grow md:justify-center md:w-8/10 md:mx-auto"
        )}
      >
        <h2 className="text-sm text-Gray-blue-darker font-bold tracking-widest uppercase">
          Sneaker Company
        </h2>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription className="sm:mt-2 md:mt-4">
          {product.description}
        </ProductDescription>
        <ProductPrices prices={product.prices} />
        <AddToCart product={product} className="mt-2" />
      </section>
    </>
  );
}
