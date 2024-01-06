"use client";

import { worksMap } from "@/(pages)/(cosmos)/(voyager)/works/map";

export function RecordAlbum() {
  return (
    <div className="flex flex-col items-center justify-center">
      <a
        className="flex flex-col space-y-[1rem] items-center"
        href={worksMap.works.now.link}
      >
        <div className="w-[150px] h-[150px] bg-white flex justify-center items-center  mt-[1rem]">
          <div className="w-[125px] h-[125px] bg-black">
            <img className="w-full h-full" src="/voyager/record/personal.png" />
          </div>
        </div>
        <p className="text-slate-50 text-xl font-bold font-creato-bold">
          Personal
        </p>
      </a>
    </div>
  );
}
