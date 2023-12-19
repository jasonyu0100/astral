import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export default function DraftConstellation({
  constellation,
}: {
  constellation: any;
}) {
  return (
    <Layer
      displayName={DraftConstellation.name}
      sizeStyle="w-[80px] h-[100px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle="flex-shrink-0"
    ></Layer>
  );
}
