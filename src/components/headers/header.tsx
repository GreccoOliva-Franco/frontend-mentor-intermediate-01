import { cn } from "@/lib/styles";
import Logo from "@/components/logos/logo";
import ShoppingCart from "@/components/shopping-carts/shopping-cart";

import UserAvatar from "./user-avatar";
import { MobileMenu } from "./mobile";
import { navbarItems } from "./items";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full p-6 pb-8 gap-12">
      <div className="flex items-center gap-4">
        <MobileMenu className="md:hidden" items={navbarItems} />
        <Logo />
        <nav className={cn("hidden", "md:flex md:gap-3")}>
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-2 text-Gray-blue-darker cursor-pointer hover:inset-ring-bo hover:outline-Orange"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 sm:gap-8">
        <ShoppingCart />
        <UserAvatar />
      </div>
    </header>
  );
}
