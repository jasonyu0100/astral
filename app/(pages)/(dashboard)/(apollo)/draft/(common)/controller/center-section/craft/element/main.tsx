import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export default function DraftCraftElement() {
  return (
    <Layer
      displayName={DraftCraftElement.name}
      sizeStyle="w-[100px] h-[100px] m-[10px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    ></Layer>
  );
}
