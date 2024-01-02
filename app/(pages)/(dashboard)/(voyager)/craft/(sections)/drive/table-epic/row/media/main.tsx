import Image from "next/image";

export function CraftTableMedia({ src }: { src: string }) {
  return (
    <div className="basis-1/3 flex justify-center items-center p-[2rem]">
      <Image alt="Mountains" src={src} width={200} height={200} />
    </div>
  );
}
