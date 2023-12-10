import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function DraftSpace({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftSpace.name}
      sizeStyle="w-full h-[540px]"
      containerStyle={containerStyles["col-centered"]}
      contentStyle="p-[20px]"
    >
      {children}
    </Layer>
  );
}
