"use client";

import Image from "next/image";


export interface CraftTableRowProps {
  name: string;
  description: string;
  src: string;
}

export interface CraftSection {
  title: string;
  rows: CraftTableRowProps[];
  description: string;
}

export default function CraftTableRow({
  name,
  description,
  src,
}: CraftTableRowProps) {
  return (
    <div className="flex flex-row divide-x-2 divide-slate-600 w-full">
      <div className="basis-1/4 flex justify-center items-center p-[20px]">
        <p className="text-center text-white text-[18.82px] font-bold font-['Creato Display'] leading-[30.12px]">
          {name}
        </p>
      </div>
      <div className="basis-1/4 flex justify-center items-center p-[20px]">
        <p className="w-[213.65px] text-white text-[15.06px] font-normal leading-snug">
          {description}
        </p>
      </div>
      <div className="basis-1/2 flex justify-center items-center p-[20px]">
        <Image alt="Mountains" src={src} width={200} height={200} />
      </div>
    </div>
  );
}
