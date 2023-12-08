import Texture from "@/(pages)/(dashboard)/(common)/texture/main";
import Image from "next/image";

function StormHeader() {
  return (
    <Texture 
      sizeStyle="h-[80px] w-full"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
      borderStyle=""
    >
      <div className="flex flex-col items-center">
        <div className="w-[40px] h-[40px] mt-[5px] rounded-[20px] overflow-hidden bg-white">
            <Image
                alt="test"
                src={`/apollo/storm/profile.png`}
                width={40}
                height={40}
            />
        </div>
        <div className="text-white text-sm mt-[5px] font-bold">Jason ></div>
      </div>
    </Texture>
  );
}

export default StormHeader;