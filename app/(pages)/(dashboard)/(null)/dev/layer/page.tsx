import {
  backgroundStyles,
  containerStyles,
  effectStyles,
} from "../../../../(common)/styles/data";
import Layer from "../../../../(common)/layer/main";

export default function LayerPage() {
  return (
    <div className="flex flex-col p-[40px] space-y-[40px]">
      <Layer
        displayName={"glass-40"}
        sizeStyle="w-[200px] h-[200px] mb-[1rem]"
        backgroundStyle={backgroundStyles["glass-40"]}
        effectStyle={effectStyles["glow-md"]}
      ></Layer>
      <Layer
        displayName={"glass-30"}
        sizeStyle="w-[200px] h-[200px] mb-[1rem]"
        backgroundStyle={backgroundStyles["glass-30"]}
        effectStyle={effectStyles["glow-md"]}
      ></Layer>
      <Layer
        displayName={"glass-20"}
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["glass-20"]}
        effectStyle={effectStyles["glow-md"]}
      ></Layer>
      <Layer
        displayName={"glass-10"}
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        effectStyle={effectStyles["glow-md"]}
      ></Layer>
      <Layer
        displayName={"glass-5"}
        sizeStyle="w-[200px] h-[200px]"
        backgroundStyle={backgroundStyles["glass-5"]}
        effectStyle={effectStyles["glow-md"]}
      ></Layer>
    </div>
  );
}
