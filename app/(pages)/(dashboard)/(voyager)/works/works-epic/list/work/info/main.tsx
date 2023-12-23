"use client";

import Image from "next/image";

export default function WorkInfo() {
  return (
    <a className="flex flex-row px-[2rem]" href="/storm">
      <div className="flex justify-end items-center">
        <Image width={50} height={50} src="/voyager/works/think.png" alt={""} />
      </div>
      <div className="w-[250px] pl-[2rem] flex flex-col justify-center">
        <p className="font-bold text-lg text-white">Jason</p>
        <p className="font-regular text-white">Hello World</p>
      </div>
    </a>
  );
}

