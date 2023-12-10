import Layer from "@/(pages)/(dashboard)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";

export default function StormMessageInput({children} : { children: React.ReactNode}) {
  return (
    <Layer
      displayName={StormMessageInput.name}
      sizeStyle="h-[80px] w-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["row-centered"]}
      borderStyle=""
    >
      {children}
    </Layer>
  );
}
