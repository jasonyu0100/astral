import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export function StormChatInput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormChatInput.name}
      sizeStyle="h-[80px] w-full"
      contentStyle="px-[1rem]"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["row-centered"]}
    >
      {children}
    </Layer>
  );
}
