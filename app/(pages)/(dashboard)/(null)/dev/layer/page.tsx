import EffectWrapper from "@/(pages)/(dashboard)/(common)/effect/main";
import {
  backgroundStyles,
  containerStyles,
  effectStyles,
} from "../../../(common)/layer/data";
import Layer from "../../../(common)/layer/main";

export default function LayerPage() {
  return (
    <div className="flex flex-col p-[40px] space-y-[40px]">
      <Layer
        sizeStyle="w-[200px] h-[200px] mb-[10px]"
        backgroundStyle={backgroundStyles["glass-40"]}
        effectStyle={effectStyles["glow-40"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px] mb-[10px]"
        backgroundStyle={backgroundStyles["glass-30"]}
        effectStyle={effectStyles["glow-30"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["glass-20"]}
        effectStyle={effectStyles["glow-20"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        effectStyle={effectStyles["glow-10"]}
      ></Layer>
      <Layer
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["glass-5"]}
        effectStyle={effectStyles["glow-5"]}
      ></Layer>
    </div>
  );
}
