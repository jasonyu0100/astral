import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export default function DraftBottomRowItem() {
  return (
    <Layer
      displayName={DraftBottomRowItem.name}
      sizeStyle="w-[80px] h-[100px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle="flex-shrink-0"
    ></Layer>
  );
}
