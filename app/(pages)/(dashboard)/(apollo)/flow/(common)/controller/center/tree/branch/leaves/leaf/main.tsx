import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";

export default function FlowSourceControlLeaf() {
  return (
    <Layer
      displayName={FlowSourceControlLeaf.name}
      sizeStyle="w-[120px] h-[90px]"
      contentStyle="flex-shrink-0"
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={borderStyles.rounded}
    ></Layer>
  );
}
