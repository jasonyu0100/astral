"use client";
import Image from "next/image";

export default function AddAlbum() {
  return (
    <div className="w-[200px] h-[250px] flex flex-col items-center justify-center">
      <a className="flex flex-col space-y-[10px] items-center" href="/collection/now">
        <div className="w-[150px] h-[150px] bg-white flex justify-center items-center">
          <div className="w-[125px] h-[125px] bg-black">
            <Image
              width={125}
              height={125}
              src="/voyager/collection/personal.png"
              alt={""}
            />
          </div>
        </div>
        <p className="text-slate-50 text-xl font-bold font-creato-bold">
          Personal
        </p>
      </a>
    </div>
  );
}
