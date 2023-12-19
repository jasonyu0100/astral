import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftSpace({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftSpace.name}
      sizeStyle="w-full h-full"
      containerStyle={containerStyles["col-center"]}
    >
      {children}
    </Layer>
  );
}
