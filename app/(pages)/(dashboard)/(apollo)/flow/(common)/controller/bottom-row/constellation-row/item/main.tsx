import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export default function FlowBottomRowItem() {
  return (
    <Layer
      displayName={FlowBottomRowItem.name}
      sizeStyle="w-[80px] h-[100px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle="flex-shrink-0"
    ></Layer>
  );
}
