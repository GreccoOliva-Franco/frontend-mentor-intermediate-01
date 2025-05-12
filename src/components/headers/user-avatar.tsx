import Image from "next/image";

export default function UserAvatar() {
  return (
    <button className="rounded-full hover:cursor-pointer">
      <Image
        src={"/image-avatar.png"}
        alt="Avatar"
        height={400}
        width={400}
        className="size-6 sm:size-12 rounded-full hover:outline-2 hover:outline-Orange"
      />
    </button>
  );
}
