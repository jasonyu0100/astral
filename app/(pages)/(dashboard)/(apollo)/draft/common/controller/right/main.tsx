import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function DraftRightContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftRightContainer.name}
      sizeStyle="h-full w-[160px]"
      borderStyle={borderStyles["rounded-tr"]}
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      {children}
    </Layer>
  );
}
