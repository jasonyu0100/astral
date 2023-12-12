import EffectWrapper from "@/(pages)/(dashboard)/(common)/effect/main";
import {
  backgroundStyles,
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
      sizeStyle="w-[900px] h-full"
      effectStyle={effectStyles["glow-md"]}
      containerStyle={containerStyles["row"]}
      borderStyle={`${borderStyles["rounded"]} ${borderStyles["border-all"]}`}
    >
      {children}
    </Layer>
  );
}
