import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function StormMessageInput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormMessageInput.name}
      sizeStyle="h-[80px] w-full"
      contentStyle="px-[2rem]"
      containerStyle={containerStyles["row-centered"]}
    >
      {children}
    </Layer>
  );
}
