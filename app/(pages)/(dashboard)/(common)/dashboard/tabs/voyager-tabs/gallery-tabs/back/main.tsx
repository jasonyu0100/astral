import { CircleLeftIcon } from "@/(pages)/(common)/icons/arrows/circle-left/main";

export function BackTab() {
    return (
      <a href="/gallery" className="flex flex-col justify-center items-start w-[2rem] mb-1">
        <CircleLeftIcon/>
        {/* <div className="w-[7rem] mt-1 text-white text-2xl font-extraBold leading-9">
          ALL
        </div> */}
      </a>
    );
  }
  