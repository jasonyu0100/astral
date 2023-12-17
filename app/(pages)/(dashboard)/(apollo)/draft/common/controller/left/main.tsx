import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftLeftContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftLeftContainer.name}
      sizeStyle="h-full w-[840px]"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col"]}
    >
      {children}
    </Layer>
  );
}
