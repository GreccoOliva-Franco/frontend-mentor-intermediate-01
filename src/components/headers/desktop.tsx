import Image from "next/image";
import { cn } from "@/lib/styles";
import { WithClassName } from "./interfaces";

export default function DesktopHeader({ className }: WithClassName) {
  return (
    <div className={cn("", className)}>
      <Image
        src={"/logo.svg"}
        alt="Sneakers's logo"
        height={1}
        width={1}
        className="size-auto"
      />
      <Image
        src={"/logo.svg"}
        alt="Sneakers's logo"
        height={1}
        width={1}
        className="size-auto"
      />
    </div>
  );
}
