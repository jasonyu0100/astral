import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function DraftLeftContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftLeftContainer.name}
      sizeStyle="h-full w-[800px]"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col"]}
    >
      {children}
    </Layer>
  );
}
