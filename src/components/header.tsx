import Image from "next/image";
import { MobileMenu } from "./headers/mobile";
import { navbarItems } from "./headers/items";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full p-6 gap-12">
      <div className="flex items-baseline gap-4">
        <MobileMenu className="sm:hidden" items={navbarItems} />
        <Logo />
      </div>
      <div className="flex gap-6">
        <Image
          src={"/icon-cart.svg"}
          alt="Shopping cart"
          width={1}
          height={1}
          className="size-auto"
        />
        <Image
          src={"/image-avatar.png"}
          alt="Avatar"
          height={1}
          width={1}
          className="size-6 sm:size-12"
        />
      </div>
    </header>
  );
}
