import EffectWrapper from "@/(pages)/(dashboard)/(common)/effect/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function StormController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormController.name}
      sizeStyle="w-[1000px] h-full"
      effectStyle={effectStyles["glow-md"]}
      containerStyle={containerStyles["row"]}
      borderStyle={borderStyles["rounded-t"]}
    >
      {children}
    </Layer>
  );
}
