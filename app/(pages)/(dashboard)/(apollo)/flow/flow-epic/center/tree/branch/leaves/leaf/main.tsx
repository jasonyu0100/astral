import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { FlowPointSnapshot } from "@/(pages)/(dashboard)/(apollo)/flow/data";

export default function FlowTreeLeaf({ leaf }: { leaf: FlowPointSnapshot }) {
  return (
    <Layer
      displayName={FlowTreeLeaf.name}
      sizeStyle="w-[120px] h-[90px]"
      contentStyle="flex-shrink-0"
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={borderStyles.rounded}
    >
      <img className="w-full h-full" src={leaf.snapshot.src} />
    </Layer>
  );
}
