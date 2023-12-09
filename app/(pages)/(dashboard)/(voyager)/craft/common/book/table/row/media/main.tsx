import Image from "next/image";

export default function CraftTableMedia({ src }: { src: string }) {
  return (
    <div className="basis-1/2 flex justify-center items-center p-[20px]">
      <Image alt="Mountains" src={src} width={200} height={200} />
    </div>
  );
}
