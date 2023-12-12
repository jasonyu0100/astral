"use client";

import Image from "next/image";

export default function WorkInfo() {
  return (
    <a className="flex flex-row px-[20px]" href="/storm">
      <div className="flex justify-end items-center">
        <Image width={50} height={50} src="/voyager/gallery/think.png" alt={""} />
      </div>
      <div className="w-[250px] pl-[20px] flex flex-col justify-center">
        <p className="font-bold text-lg text-white">Jason</p>
        <p className="font-regular text-white">Hello World</p>
      </div>
    </a>
  );
}

