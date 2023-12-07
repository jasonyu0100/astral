import Image from "next/image";

export default function SidePanelGalaxy() {
  return (
    <div className="flex flex-col items-center flex-shrink-0 bg-slate-800 w-[80px] h-[80px] p-[20px]">
      <Image alt="test" src={`/brand/icon.png`} width={50} height={50} />
    </div>
  );
}
