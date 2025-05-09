import Image from "next/image";
import { MobileMenu } from "./headers/mobile";
import { navbarItems } from "./headers/items";
import ShoppingCart from "./shopping-cart";
import Logo from "./logo";
import { cn } from "@/lib/styles";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full p-6 gap-12">
      <div className="flex items-center gap-4">
        <MobileMenu className="sm:hidden" items={navbarItems} />
        <Logo />
        <nav className={cn("hidden ml-8", "sm:flex sm:gap-3")}>
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-2 text-Gray-blue-darker"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 sm:gap-8">
        <ShoppingCart />
        <Image
          src={"/image-avatar.png"}
          alt="Avatar"
          height={400}
          width={400}
          className="size-6 sm:size-12"
        />
      </div>
    </header>
  );
}
