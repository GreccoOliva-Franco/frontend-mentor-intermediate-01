import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/logo.svg"}
      alt="Sneakers's logo"
      height={1}
      width={1}
      className="size-auto"
    />
  );
}
