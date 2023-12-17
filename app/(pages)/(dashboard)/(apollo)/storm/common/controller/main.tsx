import {
  borderStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function StormController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormController.name}
      sizeStyle="max-w-[1500px] h-full"
      effectStyle={effectStyles["glow-md"]}
      containerStyle={containerStyles["row"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
    >
      {children}
    </Layer>
  );
}
