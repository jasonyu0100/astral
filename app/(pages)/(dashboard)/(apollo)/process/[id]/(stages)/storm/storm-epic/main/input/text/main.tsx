import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";

export interface StormMessageInputTextProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export function StormMessageInputText({
  ...props
}: StormMessageInputTextProps) {
  return (
    <Layer
      displayName={StormMessageInputText.name}
      sizeStyle="max-w-[600px] flex-grow h-[50px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={borderStyles["rounded-full"]}
    >
      <input
        className="w-full h-full px-[2rem] text-white font-bold outline-none bg-transparent"
        {...props}
      />
    </Layer>
  );
}
