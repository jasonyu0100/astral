import Image from "next/image";

export default function StormHeader() {
  return (
    <div className="flex flex-col justify-center items-center flex-shrink-0 rounded-tl-md w-full h-[80px] bg-gradient-to-r from-slate-700 to-slate-800 backdrop-blur-[20px]">
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
    </div>
  );
}
