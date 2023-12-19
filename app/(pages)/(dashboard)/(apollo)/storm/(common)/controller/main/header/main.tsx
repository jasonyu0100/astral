import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";
import Image from "next/image";

function StormHeader() {
  return (
    <Layer 
      displayName={StormHeader.name}
      sizeStyle="h-[80px] w-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["col-centered"]}
      borderStyle={borderStyles["border-b"]}
    >
        <div className="w-[40px] h-[40px] mt-[5px] rounded-full overflow-hidden">
            <Image
                alt="test"
                src={`/apollo/storm/profile.png`}
                width={40}
                height={40}
            />
        </div>
        <div className="text-white text-sm mt-[5px] font-bold">Jason {">"}</div>
    </Layer>
  );
}

export default StormHeader;