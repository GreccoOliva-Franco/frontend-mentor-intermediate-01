"use client";

import Image from "next/image";
import { cn } from "@/lib/styles";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { WithClassName } from "./interfaces";
import { Item } from "./items";

export function MobileMenu({
  className,
  items,
}: { items: Item[] } & WithClassName) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={cn(className)}>
        <Image
          src={"/icon-menu.svg"}
          alt="Menu"
          height={1}
          width={1}
          unoptimized
          className="size-auto"
        />
      </SheetTrigger>
      <SheetContent side="left" className="w-6/10 p-4">
        <SheetHeader className="p-2">
          <SheetTitle className="hidden" />
          <SheetClose>
            <Image
              src={"/icon-close.svg"}
              alt="Close menu button"
              width={1}
              height={1}
              className="size-auto"
            />
          </SheetClose>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <SheetClose key={index} className="text-start p-2 font-bold">
              <a key={index} href={item.href}>
                {item.label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
