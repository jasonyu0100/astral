import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftRightContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftRightContainer.name}
      sizeStyle="h-full w-[160px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      {children}
    </Layer>
  );
}
