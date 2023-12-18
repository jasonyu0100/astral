import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export default function StormMessageInput({children} : { children: React.ReactNode}) {
  return (
    <Layer
      displayName={StormMessageInput.name}
      sizeStyle="h-[80px] w-full"
      contentStyle="px-[1rem]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["row-centered"]}
    >
      {children}
    </Layer>
  );
}
