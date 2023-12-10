import { backgroundStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";
import Image from "next/image";

function StormHeader() {
  return (
    <Layer 
      displayName={StormHeader.name}
      sizeStyle="h-[80px] w-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-centered"]}
    >
        <div className="w-[40px] h-[40px] mt-[5px] rounded-[20px] overflow-hidden">
            <Image
                alt="test"
                src={`/apollo/storm/profile.png`}
                width={40}
                height={40}
            />
        </div>
        <div className="text-white text-sm mt-[5px] font-bold">Jason ></div>
    </Layer>
  );
}

export default StormHeader;