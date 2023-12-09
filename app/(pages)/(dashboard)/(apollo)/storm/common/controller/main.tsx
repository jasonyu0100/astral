import EffectWrapper from "@/(pages)/(dashboard)/(common)/effect/main";
import {
  backgroundStyles,
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
      sizeStyle="w-[780px] h-[710px]"
      effectStyle={effectStyles["glow-md"]}
      containerStyle={containerStyles["row"]}
    >
      {children}
    </Layer>
  );
}
