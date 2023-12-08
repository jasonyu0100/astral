"use client";

import Image from "next/image";
export interface AlbumInfoProps {
  subHeading: string;
  heading: string;
}

export default function AlbumInfo({ subHeading, heading}: AlbumInfoProps) {
  return (
    <div className="flex flex-row space-x-[20px] items-center">
      <div className="flex flex-col items-center justify-center w-[160px] h-[160px] bg-white">
        <div className="w-[130px] h-[130px] bg-gradient-to-br from-slate-950 to-fuchsia-600">
          <Image width={130} height={130} src="/voyager/gallery/producer.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center h-[200px] px-[40px] py-[40px] space-y-[10px]">
        <p className="text-white text-3xl font-normal font-regular leading-9">
          {subHeading}
        </p>
        <p className="text-white text-5xl font-black">{heading}</p>
      </div>
    </div>
  );
}
