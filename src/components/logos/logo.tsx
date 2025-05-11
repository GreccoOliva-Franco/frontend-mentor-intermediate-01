import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/logo.svg"}
      alt="Sneakers's logo"
      height={400}
      width={400}
      className="size-auto"
    />
  );
}
